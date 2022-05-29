function buildMakeTemplate(
  makeId,
  validateExerciseName,
  validateExerciseType,
  validateDataOptions
) {
  return function makeTemplate(
    exerciseName,
    exerciseType,
    dataOptions,
    userId
  ) {
    validateExerciseName(exerciseName);
    validateExerciseType(exerciseType);
    validateDataOptions(exerciseType, dataOptions);

    const template = Object.freeze({
      id: makeId(),
      userId,
      exerciseName,
      exerciseType,
      dataOptions: Object.freeze(dataOptions)
    });

    return template;
  };
}

module.exports = buildMakeTemplate;
