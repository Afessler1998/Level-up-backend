function makeAddExercise(makeExercise, workoutsDb) {
  return async function addExercise(
    workoutId,
    userId,
    templateId,
    exerciseName
  ) {
    const workout = await workoutsDb.getWorkoutById(workoutId, userId);
    const exercise = makeExercise(exerciseName, templateId);
    workout.exercises.push(exercise);
    return await workoutsDb.updateWorkout(workoutId, userId, workout);
  };
}

module.exports = makeAddExercise;
