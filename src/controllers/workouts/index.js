const makeGetWorkoutsOnDate = require("./getWorkoutsOnDate");
const makeGetWorkoutDates = require("./getWorkoutDates");
const makeAddWorkout = require("./addWorkout");
const makeRemoveWorkout = require("./removeWorkout");
const makeAddExercise = require("./addExercise");
const makeRemoveExercise = require("./removeExercise");
const makeAddSet = require("./addSet");
const makeRemoveSet = require("./removeSet");
const workoutServices = require("../../services/workout-services/index");

const getWorkoutsOnDate = makeGetWorkoutsOnDate(
  workoutServices.getWorkoutsOnDate
);
const getWorkoutDates = makeGetWorkoutDates(workoutServices.getWorkoutDates);
const addWorkout = makeAddWorkout(workoutServices.addWorkout);
const removeWorkout = makeRemoveWorkout(workoutServices.removeWorkout);
const addExercise = makeAddExercise(workoutServices.addExercise);
const removeExercise = makeRemoveExercise(workoutServices.removeExercise);
const addSet = makeAddSet(workoutServices.addSet);
const removeSet = makeRemoveSet(workoutServices.removeSet);

module.exports = {
  addWorkout,
  removeWorkout,
  addExercise,
  removeExercise,
  addSet,
  removeSet,
  getWorkoutsOnDate,
  getWorkoutDates
};
