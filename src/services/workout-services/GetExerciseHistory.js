function makeGetExerciseHistory(workoutsDb) {
  return async function getExerciseHistory(templateId, userId) {
    const workoutsWithExercise = await workoutsDb.getAllWorkoutsWithExercise(
      templateId,
      userId
    );
    const exerciseHistory = [];
    workoutsWithExercise.forEach((workout) => {
      workout.exercises.forEach((exercise) => {
        if (exercise.templateId === templateId) {
          exercise.date = workout.date;
          exerciseHistory.push(exercise);
        }
      });
    });
    return exerciseHistory;
  };
}

module.exports = makeGetExerciseHistory;
