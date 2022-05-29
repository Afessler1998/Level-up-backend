function makeGetAllExerciseTemplates(templatesDb) {
  return async function getAllExerciseTemplates(userId) {
    return await templatesDb.getAllExerciseTemplatesByUserId(userId);
  };
}

module.exports = makeGetAllExerciseTemplates;
