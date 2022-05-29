function makeGetEstimatedMaxGraph(getEstimatedMaxGraphService) {
  return async function getEstimatedMaxGraph(request) {
    try {
      const { graphDimensions, dateFrom } = request.query;
      const { templateId } = request.params;
      const graphData = await getEstimatedMaxGraphService(
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

module.exports = makeGetEstimatedMaxGraph;
