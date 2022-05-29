const makeGetPersonalRecords = require("./getPersonalRecords");
const makeGetExerciseHistory = require("./getExerciseHistory");
const makeGetVolumeGraph = require("./getVolumeGraph");
const makeGetEstimatedMaxGraph = require("./getEstimatedMaxGraph");
const makeGetSpeedGraph = require("./getSpeedGraph");
const makeGetDistanceGraph = require("./getDistanceGraph");
const personalRecordsService = require("../../services/personal-records-services/index");
const workoutService = require("../../services/workout-services/index");
const dataGraphingService = require("../../services/data-graphing-services/index");

const getPersonalRecords = makeGetPersonalRecords(
  personalRecordsService.getPersonalRecords
);

const getExerciseHistory = makeGetExerciseHistory(
  workoutService.getExerciseHistory
);

const getVolumeGraph = makeGetVolumeGraph(dataGraphingService.getVolumeGraph);

const getEstimatedMaxGraph = makeGetEstimatedMaxGraph(
  dataGraphingService.getEstimatedMaxGraph
);

const getSpeedGraph = makeGetSpeedGraph(dataGraphingService.getSpeedGraph);

const getDistanceGraph = makeGetDistanceGraph(
  dataGraphingService.getDistanceGraph
);

module.exports = {
  getPersonalRecords,
  getExerciseHistory,
  getVolumeGraph,
  getEstimatedMaxGraph,
  getSpeedGraph,
  getDistanceGraph
};
