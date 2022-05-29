function makeRemoveExerciseTemplate(templatesDb, deletePersonalRecords) {
  return async function removeExerciseTemplate(templateId, userId) {
    const removedTemplate = await templatesDb.removeExerciseTemplate(
      templateId,
      userId
    );

    const { weight, reps } = removedTemplate.dataOptions;
    if (weight && reps) {
      await deletePersonalRecords(templateId, userId);
    }

    return removedTemplate;
  };
}

module.exports = makeRemoveExerciseTemplate;
