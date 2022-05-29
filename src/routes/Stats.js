const router = require("express").Router();
const expressCallback = require("../helpers/expressCallback");
const {
  getPersonalRecords,
  getExerciseHistory,
  getVolumeGraph,
  getEstimatedMaxGraph,
  getSpeedGraph,
  getDistanceGraph
} = require("../controllers/stats/index");

router.get("/history/:templateId", expressCallback(getExerciseHistory));

router.get("/personalRecords/:templateId", expressCallback(getPersonalRecords));

router.get("/volume/:templateId", expressCallback(getVolumeGraph));

router.get("/estimatedMax/:templateId", expressCallback(getEstimatedMaxGraph));

router.get("/speed/:templateId", expressCallback(getSpeedGraph));

router.get("/distance/:templateId", expressCallback(getDistanceGraph));

module.exports = router;
