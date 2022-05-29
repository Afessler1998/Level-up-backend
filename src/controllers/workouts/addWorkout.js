function makeAddWorkout(addWorkoutService) {
  return async function addWorkout(request) {
    try {
      const { workoutTitle, date } = request.body;
      const workout = await addWorkoutService(
        workoutTitle,
        date,
        request.userId
      );
      return {
        statusCode: 200,
        response: workout
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeAddWorkout;
