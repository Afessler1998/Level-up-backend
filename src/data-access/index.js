const WorkoutModel = require("../models/WorkoutModel");
const makeWorkoutsDb = require("./WorkoutsDb");
const TemplateModel = require("../models/TemplateModel");
const makeTemplatesDb = require("./TemplatesDb");
const PersonalRecordsModel = require("../models/PersonalRecordsModel");
const makePersonalRecordsDb = require("./PersonalRecordsDb");
const UserModel = require("../models/UserModel");
const makeUserDb = require("./UserDb");

const workoutsDb = makeWorkoutsDb(WorkoutModel);
const templatesDb = makeTemplatesDb(TemplateModel);
const personalRecordsDb = makePersonalRecordsDb(PersonalRecordsModel);
const userDb = makeUserDb(UserModel, WorkoutModel, TemplateModel, PersonalRecordsModel);

module.exports = { workoutsDb, templatesDb, personalRecordsDb, userDb };
