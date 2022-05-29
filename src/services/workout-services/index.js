const {
  makeWorkout,
  makeExercise,
  makeSet
} = require("../../entities/workouts/index");
const { workoutsDb, personalRecordsDb } = require("../../data-access/index");
const makeAddWorkout = require("./addWorkout");
const makeAddExercise = require("./addExercise");
const makeAddSet = require("./addSet");
const makeRemoveWorkout = require("./removeWorkout");
const makeRemoveExercise = require("./removeExercise");
const makeRemoveSet = require("./removeSet");
const makeHandleNewPr = require("./handleNewPr");
const makeHandlePrRemoval = require("./handlePrRemoval");
const makeGetWorkoutsOnDate = require("./getWorkoutsOnDate");
const makeGetWorkoutDates = require("./getWorkoutDates");
const makeGetExerciseHistory = require("./getExerciseHistory");

const handleNewPr = makeHandleNewPr(workoutsDb, personalRecordsDb);
const handlePrRemoval = makeHandlePrRemoval(workoutsDb, personalRecordsDb);
const addWorkout = makeAddWorkout(makeWorkout, workoutsDb);
const removeWorkout = makeRemoveWorkout(workoutsDb, handlePrRemoval);
const addExercise = makeAddExercise(makeExercise, workoutsDb);
const removeExercise = makeRemoveExercise(workoutsDb, handlePrRemoval);
const addSet = makeAddSet(makeSet, workoutsDb, handleNewPr);
const removeSet = makeRemoveSet(workoutsDb, handlePrRemoval);
const getWorkoutsOnDate = makeGetWorkoutsOnDate(workoutsDb);
const getWorkoutDates = makeGetWorkoutDates(workoutsDb);
const getExerciseHistory = makeGetExerciseHistory(workoutsDb);

module.exports = {
  addWorkout,
  removeWorkout,
  addExercise,
  removeExercise,
  addSet,
  removeSet,
  getWorkoutsOnDate,
  getWorkoutDates,
  getExerciseHistory
};
