function makeRemoveSet(workoutsDb, handlePrRemoval) {
  return async function (workoutId, exerciseId, setId, userId) {
    const workout = await workoutsDb.getWorkoutById(workoutId, userId);
    const exercise = workout.exercises.find(
      (exercise) => exercise.id === exerciseId
    );
    let removedSet;
    const sets = exercise.sets.filter((set) => {
      if (set.id === setId) removedSet = set;
      return set.id !== setId;
    });
    exercise.sets = sets;
    const updatedWorkout = await workoutsDb.updateWorkout(
      workoutId,
      userId,
      workout
    );
    if (removedSet.isPr)
      await handlePrRemoval(userId, removedSet.reps, exercise.templateId);
    return updatedWorkout;
  };
}

module.exports = makeRemoveSet;
