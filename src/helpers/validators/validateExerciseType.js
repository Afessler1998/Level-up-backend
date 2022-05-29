function validateExerciseType(exerciseType) {
  let isValid = false;
  if (exerciseType === "Strength") isValid = true;
  if (exerciseType === "Cardio") isValid = true;

  if (!isValid) throw new Error("Exercise type can only be Strength or Cardio");

  return isValid;
}

module.exports = validateExerciseType;
