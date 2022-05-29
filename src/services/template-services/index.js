const makeAddExerciseTemplate = require("./addExerciseTemplate");
const makeGetTemplateByExerciseName = require("./getTemplateByExerciseName");
const makeGetAllExerciseTemplates = require("./getAllExerciseTemplates");
const makeRemoveExerciseTemplate = require("./removeExerciseTemplate");
const makeTemplate = require("../../entities/templates/index");
const { templatesDb } = require("../../data-access");
const {
  createPersonalRecords,
  deletePersonalRecords
} = require("../personal-records-services/index");

const addExerciseTemplate = makeAddExerciseTemplate(
  makeTemplate,
  templatesDb,
  createPersonalRecords
);
const getTemplateByExerciseName = makeGetTemplateByExerciseName(templatesDb);
const getAllExerciseTemplates = makeGetAllExerciseTemplates(templatesDb);
const removeExerciseTemplate = makeRemoveExerciseTemplate(
  templatesDb,
  deletePersonalRecords
);

module.exports = {
  addExerciseTemplate,
  getTemplateByExerciseName,
  getAllExerciseTemplates,
  removeExerciseTemplate
};
