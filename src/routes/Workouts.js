const router = require("express").Router();
const expressCallback = require("../helpers/expressCallback");
const {
  getWorkoutsOnDate,
  getWorkoutDates,
  addWorkout,
  removeWorkout,
  addExercise,
  removeExercise,
  addSet,
  removeSet
} = require("../controllers/workouts/index");

router.post("/addWorkout", expressCallback(addWorkout));

router.post("/removeWorkout", expressCallback(removeWorkout));

router.post("/addExercise", expressCallback(addExercise));

router.post("/removeExercise", expressCallback(removeExercise));

router.post("/addSet", expressCallback(addSet));

router.post("/removeSet", expressCallback(removeSet));

router.get("/:date", expressCallback(getWorkoutsOnDate));

router.get("/:dateFrom/:dateTo", expressCallback(getWorkoutDates));

module.exports = router;
