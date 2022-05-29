function exerciseToDistanceData(exerciseList) {
  const dataList = [];

  let maxDistance = 0;

  exerciseList.forEach((exercise) => {
    let exerciseMaxDistance = 0;
    exercise.sets.forEach((set) => {
      if (set.distance > maxDistance) maxDistance = set.distance;
      if (set.distance > exerciseMaxDistance)
        exerciseMaxDistance = set.distance;
    });
    dataList.push({ data: exerciseMaxDistance, date: exercise.date });
  });

  const peakValue = Math.ceil(maxDistance);

  return {
    dataList,
    peakValue
  };
}

module.exports = exerciseToDistanceData;
