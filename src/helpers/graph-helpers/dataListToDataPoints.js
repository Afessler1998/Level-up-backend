function dataListToDataPoints(
  dataList,
  peakValue,
  startDate,
  totalDays,
  paddingDimensions
) {
  const { paddingValue, paddedHeight, paddedWidth } = paddingDimensions;

  const dataPoints = [];

  dataList.forEach(({ data, date }) => {
    const dayNum = Math.ceil(
      (date.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const xCoord = (dayNum / totalDays) * paddedWidth + paddingValue;
    const yCoord =
      paddedHeight - (data / peakValue) * paddedHeight + paddingValue;
    const dataPoint = {
      xCoord,
      yCoord
    };

    dataPoints.push(dataPoint);
  });

  return dataPoints;
}

module.exports = dataListToDataPoints;
