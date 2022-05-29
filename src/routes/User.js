const router = require("express").Router();
const expressCallback = require("../helpers/expressCallback");
const {
  getUserSettings,
  setUserSettings,
  deleteUserData
} = require("../controllers/users/index");

router.get("/settings", expressCallback(getUserSettings));

router.post("/settings", expressCallback(setUserSettings));

router.get("/delete", expressCallback(deleteUserData));

module.exports = router;
