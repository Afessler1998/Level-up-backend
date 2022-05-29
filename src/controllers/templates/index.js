const makeAddExerciseTemplate = require("./addExerciseTemplate");
const makeGetTemplateByExerciseName = require("./getTemplateByExerciseName");
const makeGetAllExerciseTemplates = require("./getAllExerciseTemplates");
const makeRemoveExerciseTemplate = require("./removeExerciseTemplate");
const templatesService = require("../../services/template-services/index");

const addExerciseTemplate = makeAddExerciseTemplate(
  templatesService.addExerciseTemplate
);

const getTemplateByExerciseName = makeGetTemplateByExerciseName(
  templatesService.getTemplateByExerciseName
);

const getAllExerciseTemplates = makeGetAllExerciseTemplates(
  templatesService.getAllExerciseTemplates
);

const removeExerciseTemplate = makeRemoveExerciseTemplate(
  templatesService.removeExerciseTemplate
);

module.exports = {
  addExerciseTemplate,
  getTemplateByExerciseName,
  getAllExerciseTemplates,
  removeExerciseTemplate
};
