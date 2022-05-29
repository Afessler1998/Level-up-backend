function exerciseToMaxData(exerciseList) {
  maxPercentagesTable = {
    1: 1,
    2: 0.95,
    3: 0.93,
    4: 0.9,
    5: 0.87,
    6: 0.85,
    7: 0.83,
    8: 0.8,
    9: 0.77,
    10: 0.75,
    11: 0.7,
    12: 0.67
  };

  const dataList = [];

  let maxValue = 0;

  exerciseList.forEach((exercise) => {
    let bestMax = 0;
    exercise.sets.forEach((set) => {
      const rir = set.rir ? set.rir : 0;
      if (set.reps <= 12) {
        const reps = set.reps + rir;
        const predictedMax =
          set.weight + set.weight * (1 - maxPercentagesTable[reps]);
        if (predictedMax > bestMax) bestMax = predictedMax;
        if (predictedMax > maxValue) maxValue = predictedMax;
      }
    });
    if (bestMax > 0) {
      dataList.push({ data: bestMax, date: exercise.date });
    }
  });

  const peakValue = Math.ceil(maxValue / 50) * 50;

  return {
    peakValue,
    dataList
  };
}

module.exports = exerciseToMaxData;
