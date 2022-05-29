function makeGetWorkoutDates(getWorkoutDatesService) {
  return async function getWorkoutsOnDate(request) {
    try {
      const { dateFrom, dateTo } = request.params;
      const workoutsDates = await getWorkoutDatesService(
        dateFrom,
        dateTo,
        request.userId
      );
      return {
        statusCode: 200,
        response: workoutsDates
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetWorkoutDates;
