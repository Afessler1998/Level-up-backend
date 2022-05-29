function makeGetTemplateByExerciseName(getTemplateByExerciseNameService) {
  return async function getTemplateByExerciseName(request) {
    try {
      const exerciseName = request.params?.exerciseName;
      const exerciseTemplate = await getTemplateByExerciseNameService(
        exerciseName,
        request.userId
      );
      return {
        statusCode: 200,
        response: exerciseTemplate
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetTemplateByExerciseName;
