const makeId = require("../../helpers/makeId");
const buildMakeSocialsUser = require("./socialsUser");

const makeSocialsUser = buildMakeSocialsUser(makeId);

module.exports = makeSocialsUser;
