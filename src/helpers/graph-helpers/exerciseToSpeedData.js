function exerciseToSpeedData(exerciseList) {
  const dataList = [];

  let maxSpeed = 0;

  exerciseList.forEach((exercise) => {
    let exerciseMaxSpeed = 0;
    exercise.sets.forEach((set) => {
      if (set.speed > maxSpeed) maxSpeed = set.speed;
      if (set.speed > exerciseMaxSpeed) exerciseMaxSpeed = set.speed;
    });
    dataList.push({ data: exerciseMaxSpeed, date: exercise.date });
  });

  const peakValue = Math.ceil(maxSpeed);

  return {
    dataList,
    peakValue
  };
}

module.exports = exerciseToSpeedData;
