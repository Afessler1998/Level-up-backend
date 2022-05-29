function makeGetAllExerciseTemplates(getAllExerciseTemplatesService) {
  return async function getAllExerciseTemplates(request) {
    try {
      const templates = await getAllExerciseTemplatesService(request.userId);
      return {
        statusCode: 200,
        response: templates
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetAllExerciseTemplates;
