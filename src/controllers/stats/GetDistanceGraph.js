function makeGetDistanceGraph(getDistanceGraphService) {
  return async function getDistanceGraph(request) {
    try {
      const { graphDimensions, dateFrom } = request.query;
      const { templateId } = request.params;
      const graphData = await getDistanceGraphService(
        templateId,
        dateFrom,
        graphDimensions,
        request.userId
      );
      return {
        statusCode: 200,
        response: graphData
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetDistanceGraph;
