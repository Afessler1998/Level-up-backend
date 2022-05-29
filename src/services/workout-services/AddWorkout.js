function makeAddWorkout(makeWorkout, workoutsDb) {
  return async function addWorkout(workoutTitle, date, userId) {
    const workout = makeWorkout(workoutTitle, date, userId);
    return await workoutsDb.createWorkout(workout);
  };
}

module.exports = makeAddWorkout;
