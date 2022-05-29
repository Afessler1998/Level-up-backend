function makeAddExerciseTemplate(
  makeTemplate,
  templatesDb,
  createPersonalRecords
) {
  return async function addExerciseTemplate(
    exerciseName,
    exerciseType,
    dataOptions,
    userId
  ) {
    const template = makeTemplate(
      exerciseName,
      exerciseType,
      dataOptions,
      userId
    );
    const createdTemplate = await templatesDb.createTemplate(template);

    //personal records should only be created if the created template includes reps and weight
    if (dataOptions.weight && dataOptions.reps) {
      await createPersonalRecords(userId, exerciseName, createdTemplate.id);
    }

    return createdTemplate;
  };
}

module.exports = makeAddExerciseTemplate;
