const makeId = require("../../helpers/makeId");
const buildMakeSocialsUser = require("./SocialsUser");

const makeSocialsUser = buildMakeSocialsUser(makeId);

module.exports = makeSocialsUser;
