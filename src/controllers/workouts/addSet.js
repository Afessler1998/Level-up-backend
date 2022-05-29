function makeAddSet(addSetService) {
  return async function addSet(request) {
    try {
      const { workoutId, templateId, setData } = request.body;
      const updatedWorkout = await addSetService(
        request.userId,
        workoutId,
        templateId,
        setData
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

module.exports = makeAddSet;
