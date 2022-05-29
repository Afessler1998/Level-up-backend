function makeGetExerciseHistory(getExerciseHistoryService) {
  return async function getExerciseHistory(request) {
    try {
      const { templateId } = request.params;
      const exerciseHistory = await getExerciseHistoryService(
        templateId,
        request.userId
      );
      return {
        statusCode: 200,
        response: exerciseHistory
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetExerciseHistory;
