function makeTemplatesDb(TemplateModel) {
  return Object.freeze({
    createTemplate,
    getTemplateByExerciseName,
    getAllExerciseTemplatesByUserId,
    removeExerciseTemplate
  });

  async function createTemplate(template) {
    const newTemplate = await TemplateModel.create(template);
    return JSON.parse(JSON.stringify(newTemplate));
  }

  async function getTemplateByExerciseName(exerciseName, userId) {
    const template = await TemplateModel.findOne({ exerciseName, userId });
    return JSON.parse(JSON.stringify(template));
  }

  async function getAllExerciseTemplatesByUserId(userId) {
    const templates = await TemplateModel.find({ userId });
    return JSON.parse(JSON.stringify(templates));
  }

  async function removeExerciseTemplate(id, userId) {
    const template = await TemplateModel.findOneAndDelete({
      id,
      userId
    });
    return JSON.parse(JSON.stringify(template));
  }
}

module.exports = makeTemplatesDb;
