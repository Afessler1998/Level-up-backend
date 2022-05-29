const WorkoutModel = require("../models/workoutModel");
const makeWorkoutsDb = require("./workoutsDb");
const TemplateModel = require("../models/templateModel");
const makeTemplatesDb = require("./templatesDb");
const PersonalRecordsModel = require("../models/personalRecordsModel");
const makePersonalRecordsDb = require("./personalRecordsDb");
const UserModel = require("../models/userModel");
const makeUserDb = require("./userDb");

const workoutsDb = makeWorkoutsDb(WorkoutModel);
const templatesDb = makeTemplatesDb(TemplateModel);
const personalRecordsDb = makePersonalRecordsDb(PersonalRecordsModel);
const userDb = makeUserDb(UserModel, WorkoutModel, TemplateModel, PersonalRecordsModel);

module.exports = { workoutsDb, templatesDb, personalRecordsDb, userDb };
