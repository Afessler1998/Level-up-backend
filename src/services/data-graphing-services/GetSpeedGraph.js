function makeGetSpeedGraph(
  workoutsDb,
  extractExerciseData,
  exerciseToSpeedData,
  dataListToDataPoints,
  getHorizontalGuides
) {
  return async function getSpeedGraph(
    templateId,
    dateFrom,
    graphDimensions,
    userId
  ) {
    const startDate = new Date(dateFrom);
    const endDate = new Date();
    const totalDays = Math.floor(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const { graphHeight, graphWidth, graphPadding } =
      JSON.parse(graphDimensions);
    const paddingDimensions = {
      paddingValue: graphWidth * graphPadding,
      paddedHeight: graphHeight - graphWidth * graphPadding * 2,
      paddedWidth: graphWidth - graphWidth * graphPadding * 2
    };

    const yIncrement = 1;

    const workouts = await workoutsDb.getWorkoutsWithExerciseBetweenDates(
      templateId,
      dateFrom,
      endDate,
      userId
    );
    const exerciseList = extractExerciseData(workouts, templateId);
    const { dataList, peakValue } = exerciseToSpeedData(exerciseList);

    const dataPoints = dataListToDataPoints(
      dataList,
      peakValue,
      startDate,
      totalDays,
      paddingDimensions
    );
    const horizontalGuides = getHorizontalGuides(
      peakValue,
      paddingDimensions,
      yIncrement
    );

    return {
      dataPoints,
      horizontalGuides
    };
  };
}

module.exports = makeGetSpeedGraph;
