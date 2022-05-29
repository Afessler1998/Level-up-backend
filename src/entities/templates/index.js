const makeId = require("../../helpers/makeId");
const validateExerciseName = require("../../helpers/validators/validateExerciseName");
const validateExerciseType = require("../../helpers/validators/validateExerciseType");
const validateDataOptions = require("../../helpers/validators/validateDataOptions");
const buildMakeTemplate = require("./templates");

const makeTemplate = buildMakeTemplate(
  makeId,
  validateExerciseName,
  validateExerciseType,
  validateDataOptions
);

module.exports = makeTemplate;
