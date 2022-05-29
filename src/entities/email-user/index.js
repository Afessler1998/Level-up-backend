const makeId = require("../../helpers/makeId");
const validateEmail = require("../../helpers/validators/validateEmail");
const validatePassword = require("../../helpers/validators/validatePassword");
const buildMakeEmailUser = require("./emailUser");

const makeEmailUser = buildMakeEmailUser(
  makeId,
  validateEmail,
  validatePassword
);

module.exports = makeEmailUser;
