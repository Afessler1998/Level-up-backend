function makeWorkoutsDb(WorkoutModel) {
  return Object.freeze({
    createWorkout,
    updateWorkout,
    deleteWorkout,
    getWorkoutById,
    getWorkoutsOnDate,
    getWorkoutsBetweenDates,
    getAllWorkoutsWithExercise,
    getWorkoutsWithExerciseBetweenDates,
    getWorkoutWithSet
  });

  async function createWorkout(workout) {
    const newWorkout = await WorkoutModel.create(workout);
    return JSON.parse(JSON.stringify(newWorkout));
  }

  async function updateWorkout(workoutId, userId, newWorkout) {
    const updatedWorkout = await WorkoutModel.findOneAndUpdate(
      { id: workoutId, userId },
      newWorkout
    );
    return JSON.parse(JSON.stringify(updatedWorkout));
  }

  async function deleteWorkout(workoutId, userId) {
    const deletedWorkout = await WorkoutModel.findOneAndDelete({
      id: workoutId,
      userId
    });
    return JSON.parse(JSON.stringify(deletedWorkout));
  }

  async function getWorkoutById(workoutId, userId) {
    const workout = await WorkoutModel.findOne({
      id: workoutId,
      userId
    });
    return JSON.parse(JSON.stringify(workout));
  }

  async function getWorkoutsOnDate(date, userId) {
    const workouts = await WorkoutModel.find({ userId, date });
    return JSON.parse(JSON.stringify(workouts));
  }

  async function getWorkoutsBetweenDates(dateFrom, dateTo, userId) {
    const workouts = await WorkoutModel.find({
      date: { $gte: dateFrom, $lte: dateTo },
      userId
    });
    return JSON.parse(JSON.stringify(workouts));
  }

  async function getAllWorkoutsWithExercise(templateId, userId) {
    const workouts = await WorkoutModel.find({
      userId,
      exercises: {
        $elemMatch: {
          templateId
        }
      }
    }).sort({ date: -1 });
    return JSON.parse(JSON.stringify(workouts));
  }

  async function getWorkoutsWithExerciseBetweenDates(
    templateId,
    dateFrom,
    dateTo,
    userId
  ) {
    const workouts = await WorkoutModel.find({
      date: { $gte: dateFrom, $lte: dateTo },
      userId,
      exercises: {
        $elemMatch: {
          templateId
        }
      }
    }).sort({ date: 1 });
    return JSON.parse(JSON.stringify(workouts));
  }

  async function getWorkoutWithSet(userId, setId) {
    const workout = await WorkoutModel.findOne({
      userId,
      "exercises.sets.id": setId
    });
    return JSON.parse(JSON.stringify(workout));
  }
}

module.exports = makeWorkoutsDb;
