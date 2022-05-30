const { workoutsDb } = require("../../data-access/index");
const extractExerciseData = require("../../helpers/graph-helpers/extractExerciseData");
const exerciseToVolumeData = require("../../helpers/graph-helpers/exerciseToVolumeData");
const exerciseToMaxData = require("../../helpers/graph-helpers/exerciseToMaxData");
const exerciseToSpeedData = require("../../helpers/graph-helpers/exerciseToSpeedData");
const exerciseToDistanceData = require("../../helpers/graph-helpers/exerciseToDistanceData");
const dataListToDataPoints = require("../../helpers/graph-helpers/dataListToDataPoints");
const getHorizontalGuides = require("../../helpers/graph-helpers/getHorizontalGuides");
const roundToNearestTen = require("../../helpers/graph-helpers/roundToNearestTen");
const roundToNearestTwo = require("../../helpers/graph-helpers/roundToNearestTwo");
const makeGetVolumeGraph = require("./GetVolumeGraph");
const makeGetEstimatedMaxGraph = require("./GetEstimatedMaxGraph");
const makeGetSpeedGraph = require("./GetSpeedGraph");
const makeGetDistanceGraph = require("./GetDistanceGraph");

const getVolumeGraph = makeGetVolumeGraph(
  workoutsDb,
  extractExerciseData,
  exerciseToVolumeData,
  dataListToDataPoints,
  getHorizontalGuides
);

const getEstimatedMaxGraph = makeGetEstimatedMaxGraph(
  workoutsDb,
  extractExerciseData,
  exerciseToMaxData,
  dataListToDataPoints,
  getHorizontalGuides
);

const getSpeedGraph = makeGetSpeedGraph(
  workoutsDb,
  extractExerciseData,
  exerciseToSpeedData,
  dataListToDataPoints,
  getHorizontalGuides
);

const getDistanceGraph = makeGetDistanceGraph(
  workoutsDb,
  extractExerciseData,
  exerciseToDistanceData,
  dataListToDataPoints,
  getHorizontalGuides,
  roundToNearestTen,
  roundToNearestTwo
);

module.exports = {
  getVolumeGraph,
  getEstimatedMaxGraph,
  getSpeedGraph,
  getDistanceGraph
};
