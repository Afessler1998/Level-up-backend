const userServices = require("../../services/user-services/index");
const makeGetUserSettings = require("./getUserSettings");
const makeSetUserSettings = require("./setUserSettings");
const makeDeleteUserData = require("./deleteUserData");

const getUserSettings = makeGetUserSettings(userServices.getUserById);
const setUserSettings = makeSetUserSettings(userServices.setUserSettings);
const deleteUserData = makeDeleteUserData(userServices.deleteUserData);

module.exports = { getUserSettings, setUserSettings, deleteUserData };
