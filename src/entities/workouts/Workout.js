function buildMakeWorkout(makeId, validateWorkoutTitle, validateDate) {
  return function makeWorkout(workoutTitle, date, userId) {
    validateWorkoutTitle(workoutTitle);
    validateDate(date);

    const workout = Object.freeze({
      id: makeId(),
      userId,
      workoutTitle,
      date,
      exercises: Object.freeze([])
    });

    return workout;
  };
}

module.exports = buildMakeWorkout;
