function makeGetWorkoutDates(workoutsDb) {
  return async function getWorkoutDates(dateFrom, dateTo, userId) {
    const workoutsBetweenDates = await workoutsDb.getWorkoutsBetweenDates(
      dateFrom,
      dateTo,
      userId
    );
    return workoutsBetweenDates.map((workout) => workout.date);
  };
}

module.exports = makeGetWorkoutDates;
