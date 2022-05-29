function validateWorkoutTitle(workoutTitle) {
  const validator = new RegExp(/^[A-Za-z\s-]+$/);
  const result = validator.test(workoutTitle);
  const IsLessThanThirtyChars = workoutTitle.length <= 30;

  if (!result) {
    throw new Error(
      "Workout title can only contain Letters, spaces, and hyphens"
    );
  }

  if (!IsLessThanThirtyChars) {
    throw new Error("Workout title cannot be longer than 30 characters");
  }

  return result && IsLessThanThirtyChars;
}

module.exports = validateWorkoutTitle;
