function makeRemoveSet(removeSetService) {
  return async function removeSet(request) {
    try {
      const { workoutId, exerciseId, setId } = request.body;
      const updatedWorkout = await removeSetService(
        workoutId,
        exerciseId,
        setId,
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

module.exports = makeRemoveSet;
