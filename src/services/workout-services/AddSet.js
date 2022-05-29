function makeAddSet(makeSet, workoutsDb, handleNewPr) {
  return async function addSet(userId, workoutId, templateId, setData) {
    let workout = await workoutsDb.getWorkoutById(workoutId, userId);
    let exercise = workout.exercises.find(
      (exercise) => exercise.templateId === templateId
    );

    let isPr = false;
    const set = makeSet(isPr, setData);
    isPr = await handleNewPr(
      userId,
      set,
      templateId,
      workout.date,
      exercise.id
    );
    if (isPr) {
      workout = await workoutsDb.getWorkoutById(workoutId, userId);
      exercise = workout.exercises.find(
        (exercise) => exercise.templateId === templateId
      );
    }

    exercise.sets.push(set);
    const updatedWorkout = await workoutsDb.updateWorkout(
      workoutId,
      userId,
      workout
    );
    return {
      isPr,
      updatedWorkout
    };
  };
}

module.exports = makeAddSet;
