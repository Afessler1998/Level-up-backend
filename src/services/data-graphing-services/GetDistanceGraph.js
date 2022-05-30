function makeGetDistanceGraph(
  workoutsDb,
  extractExerciseData,
  exerciseToDistanceData,
  dataListToDataPoints,
  getHorizontalGuides
) {
  return async function getDistanceGraph(
    templateId,
    dateFrom,
    graphDimensions,
    userId
  ) {
    const endDate = new Date();
    const startDate = new Date(dateFrom);
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

    const workouts = await workoutsDb.getWorkoutsWithExerciseBetweenDates(
      templateId,
      startDate,
      endDate,
      userId
    );
    const exerciseList = extractExerciseData(workouts, templateId);
    const { dataList, peakValue } = exerciseToDistanceData(exerciseList);

    const yIncrement = peakValue > 10 ? 2 : 1;

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

module.exports = makeGetDistanceGraph;
