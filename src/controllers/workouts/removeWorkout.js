function makeRemoveWorkout(removeWorkoutService) {
  return async function (request) {
    try {
      const { workoutId } = request.body;
      const removedWorkout = removeWorkoutService(workoutId, request.userId);
      return {
        statusCode: 200,
        response: removedWorkout
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeRemoveWorkout;
