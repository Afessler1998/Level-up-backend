function makeGetWorkoutsOnDate(getWorkoutsOnDateService) {
  return async function getWorkoutsOnDate(request) {
    try {
      const date = request.params?.date;
      const userId = request.userId;
      const workouts = await getWorkoutsOnDateService(date, userId);
      return {
        statusCode: 200,
        response: workouts
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetWorkoutsOnDate;
