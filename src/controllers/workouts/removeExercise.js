function makeRemoveExercise(removeExerciseService) {
  return async function removeExercise(request) {
    try {
      const { workoutId, exerciseId } = request.body;
      const updatedWorkout = await removeExerciseService(
        workoutId,
        exerciseId,
        request.userId
      );
      return {
        statusCode: 200,
        response: updatedWorkout
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeRemoveExercise;
