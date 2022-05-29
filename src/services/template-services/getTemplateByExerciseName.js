function makeGetTemplateByExerciseName(templatesDb) {
  return async function getTemplateByExerciseName(exerciseName, userId) {
    return await templatesDb.getTemplateByExerciseName(exerciseName, userId);
  };
}

module.exports = makeGetTemplateByExerciseName;
