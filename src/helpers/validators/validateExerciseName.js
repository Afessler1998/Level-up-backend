function validateExerciseName(exerciseName) {
  const validator = new RegExp(/^[A-Za-z\s-]+$/);
  const result = validator.test(exerciseName);
  const IsLessThanThirtyChars = exerciseName.length <= 30;

  if (!result) {
    throw new Error(
      "Exercise name can only contain Letters, spaces, and hyphens"
    );
  }

  if (!IsLessThanThirtyChars) {
    throw new Error("Exercise name cannot be longer than 30 characters");
  }

  return result && IsLessThanThirtyChars;
}

module.exports = validateExerciseName;
