function buildMakeExercise(makeId, validateExerciseName) {
  return function makeExercise(exerciseName, templateId) {
    validateExerciseName(exerciseName);

    const exercise = Object.freeze({
      id: makeId(),
      exerciseName,
      templateId,
      sets: Object.freeze([])
    });

    return exercise;
  };
}

module.exports = buildMakeExercise;
