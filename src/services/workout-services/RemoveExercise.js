function makeRemoveExercise(workoutsDb, handlePrRemoval) {
  return async function removeExercise(workoutId, exerciseId, userId) {
    const workout = await workoutsDb.getWorkoutById(workoutId, userId);
    let removedExercise;
    const exercises = workout.exercises.filter((exercise) => {
      if (exercise.id === exerciseId) removedExercise = exercise;
      return exercise.id !== exerciseId;
    });
    workout.exercises = exercises;
    const updatedWorkout = await workoutsDb.updateWorkout(
      workoutId,
      userId,
      workout
    );
    for (let i = 0; i < removedExercise.sets.length; i += 1) {
      const set = removedExercise.sets[i];
      if (set.isPr)
        await handlePrRemoval(userId, set.reps, removedExercise.templateId);
    }
    return updatedWorkout;
  };
}

module.exports = makeRemoveExercise;
