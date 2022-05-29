function makeGetVolumeGraph(getVolumeGraphService) {
  return async function getVolumeGraph(request) {
    try {
      const { graphDimensions, dateFrom } = request.query;
      const { templateId } = request.params;
      const graphData = await getVolumeGraphService(
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

module.exports = makeGetVolumeGraph;
