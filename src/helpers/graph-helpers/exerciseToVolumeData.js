function exerciseToVolumeData(exerciseList) {
  const dataList = [];

  let maxVolume = 0;

  exerciseList.forEach((exercise) => {
    let totalVolume = 0;
    exercise.sets.forEach((set) => {
      const volume = set.weight * set.reps;
      totalVolume += volume;
    });
    dataList.push({ data: totalVolume, date: exercise.date });
    if (totalVolume > maxVolume) maxVolume = totalVolume;
  });

  const peakValue = Math.ceil(maxVolume / 1000) * 1000;

  return {
    dataList,
    peakValue
  };
}

module.exports = exerciseToVolumeData;
