function makeAddExercise(addExerciseService) {
  return async function addExercise(request) {
    try {
      const { workoutId, exerciseName, templateId } = request.body;
      const updatedWorkout = await addExerciseService(
        workoutId,
        request.userId,
        templateId,
        exerciseName
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

module.exports = makeAddExercise;
