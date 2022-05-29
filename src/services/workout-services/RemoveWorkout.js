function makeRemoveWorkout(workoutsDb, handlePrRemoval) {
  return async function removeWorkout(workoutId, userId) {
    const removedWorkout = await workoutsDb.deleteWorkout(workoutId, userId);

    for (let i = 0; i < removedWorkout.exercises.length; i += 1) {
      const exercise = removedWorkout.exercises[i];
      for (let j = 0; j < exercise.sets.length; j += 1) {
        const set = exercise.sets[j];
        if (set.isPr)
          await handlePrRemoval(userId, set.reps, exercise.templateId);
      }
    }

    return removedWorkout;
  };
}

module.exports = makeRemoveWorkout;
