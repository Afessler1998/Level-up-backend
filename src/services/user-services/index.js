const { userDb } = require("../../data-access/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../utils/sendEmail");
const validatePassword = require("../../helpers/validators/validatePassword");
const makeSocialsUser = require("../../entities/socials-user/index");
const makeEmailUser = require("../../entities/email-user/index");
const makeResetCode = require("../../helpers/makeResetCode");
const makeGetUserById = require("./getUserById");
const makeUpsertSocialsUser = require("./upsertSocialsUser");
const makeSignUpEmail = require("./signUpEmail");
const makeSignInEmail = require("./signInEmail");
const makeSetUserSettings = require("./setUserSettings");
const makeGetPasswordResetCode = require("./getPasswordResetCode");
const makeResetPassword = require("./resetPassword");
const makeDeleteUserData = require("./deleteUserData");

const getUserById = makeGetUserById(userDb);
const upsertSocialsUser = makeUpsertSocialsUser(makeSocialsUser, userDb);
const signUpEmail = makeSignUpEmail(makeEmailUser, userDb, bcrypt);
const signInEmail = makeSignInEmail(userDb, bcrypt, jwt);
const getPasswordResetCode = makeGetPasswordResetCode(
  userDb,
  makeResetCode,
  sendEmail
);
const resetPassword = makeResetPassword(userDb, bcrypt, validatePassword);
const setUserSettings = makeSetUserSettings(userDb);
const deleteUserData = makeDeleteUserData(userDb);

module.exports = {
  getUserById,
  upsertSocialsUser,
  signUpEmail,
  signInEmail,
  getPasswordResetCode,
  resetPassword,
  setUserSettings,
  deleteUserData
};
