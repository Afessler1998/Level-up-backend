function makeAddExerciseTemplate(addExerciseTemplateService) {
  return async function addExerciseTemplate(request) {
    try {
      const { exerciseName, exerciseType, dataOptions } = request.body;
      const template = await addExerciseTemplateService(
        exerciseName,
        exerciseType,
        dataOptions,
        request.userId
      );
      return {
        statusCode: 200,
        response: template
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeAddExerciseTemplate;
