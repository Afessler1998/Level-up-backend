function validateDataOptions(exerciseType, dataOptions) {
  let isValid = false;
  const { speed, distance, calories, heartRate, duration, reps, rir, weight } =
    dataOptions;

  //isValid expression in if statements returns true if at least one option is true
  //nested if statement ensures none of the options disallowed for exercise type are selected

  if (exerciseType === "Strength") {
    isValid = duration || reps || rir || weight;
    if (speed || distance || calories || heartRate) {
      throw new Error(
        "At least one of the selected data options is not allowed for Strength exercises"
      );
    }
  }

  if (exerciseType === "Cardio") {
    isValid = speed || distance || calories || heartRate || duration;
    if (reps || rir || weight) {
      throw new Error(
        "At least one of the selected data options is not allowed for Cardio exercises"
      );
    }
  }

  if (!isValid) throw new Error("At least one data option must be selected");

  return isValid;
}

module.exports = validateDataOptions;
