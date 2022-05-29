function extractExerciseData(workoutData, templateId) {
  const exerciseList = workoutData.map((workout) => {
    const exercise = JSON.parse(
      JSON.stringify(
        workout.exercises.find((exercise) => {
          return exercise.templateId === templateId;
        })
      )
    );
    exercise.date = new Date(workout.date);
    return exercise;
  });
  return exerciseList;
}

module.exports = extractExerciseData;
