const expressCallback = require("../helpers/expressCallback");
const {
  addExerciseTemplate,
  getAllExerciseTemplates,
  getTemplateByExerciseName,
  removeExerciseTemplate
} = require("../controllers/templates/index");

const router = require("express").Router();

router.post("/addTemplate", expressCallback(addExerciseTemplate));

router.get(
  "/templateByName/:exerciseName",
  expressCallback(getTemplateByExerciseName)
);

router.get("/exerciseTemplates", expressCallback(getAllExerciseTemplates));

router.delete("/:templateId", expressCallback(removeExerciseTemplate));

module.exports = router;
