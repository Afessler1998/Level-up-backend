const makeId = require("../../helpers/makeId");
const validateExerciseName = require("../../helpers/validators/validateExerciseName");
const buildMakePersonalRecords = require("./PersonalRecords");

const makePersonalRecords = buildMakePersonalRecords(
  makeId,
  validateExerciseName
);

module.exports = makePersonalRecords;
