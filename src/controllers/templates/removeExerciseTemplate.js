function makeRemoveExerciseTemplate(removeExerciseTemplateService) {
  return async function removeExerciseTemplate(request) {
    try {
      const templateId = request.params?.templateId;
      const removedTemplate = removeExerciseTemplateService(
        templateId,
        request.userId
      );
      return {
        statusCode: 200,
        response: removedTemplate
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeRemoveExerciseTemplate;
