const {
  makeWorkout,
  makeExercise,
  makeSet
} = require("../../entities/workouts/index");
const { workoutsDb, personalRecordsDb } = require("../../data-access/index");
const makeAddWorkout = require("./AddWorkout");
const makeAddExercise = require("./AddExercise");
const makeAddSet = require("./AddSet");
const makeRemoveWorkout = require("./RemoveWorkout");
const makeRemoveExercise = require("./RemoveExercise");
const makeRemoveSet = require("./RemoveSet");
const makeHandleNewPr = require("./HandleNewPr");
const makeHandlePrRemoval = require("./HandlePrRemoval");
const makeGetWorkoutsOnDate = require("./GetWorkoutsOnDate");
const makeGetWorkoutDates = require("./GetWorkoutDates");
const makeGetExerciseHistory = require("./GetExerciseHistory");

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
