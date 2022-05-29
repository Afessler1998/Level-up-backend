const makeId = require("../../helpers/makeId");
const validateWorkoutTitle = require("../../helpers/validators/validateWorkoutTitle");
const validateDate = require("../../helpers/validators/validateDate");
const validateExerciseName = require("../../helpers/validators/validateExerciseName");
const validateSetData = require("../../helpers/validators/validateSetData");
const buildMakeWorkout = require("./Workout");
const buildMakeExercise = require("./Exercise");
const buildMakeSet = require("./Set");

const makeWorkout = buildMakeWorkout(
  makeId,
  validateWorkoutTitle,
  validateDate
);

const makeExercise = buildMakeExercise(makeId, validateExerciseName);

const makeSet = buildMakeSet(makeId, validateSetData);

module.exports = { makeWorkout, makeExercise, makeSet };
