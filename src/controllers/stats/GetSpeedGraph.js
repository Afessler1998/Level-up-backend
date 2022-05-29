function makeGetSpeedGraph(getSpeedGraphService) {
  return async function getSpeedGraph(request) {
    try {
      const { graphDimensions, dateFrom } = request.query;
      const { templateId } = request.params;
      const graphData = await getSpeedGraphService(
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

module.exports = makeGetSpeedGraph;
