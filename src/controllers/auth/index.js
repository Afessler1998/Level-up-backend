const userServices = require("../../services/user-services/index");
const makeSignUpEmail = require("./signUpEmail");
const makeSignInEmail = require("./signInEmail");
const makeGetPasswordResetCode = require("./getPasswordResetCode");
const makeResetPassword = require("./resetPassword");

const signUpEmail = makeSignUpEmail(userServices.signUpEmail);
const signInEmail = makeSignInEmail(userServices.signInEmail);
const getPasswordResetCode = makeGetPasswordResetCode(
  userServices.getPasswordResetCode
);
const resetPassword = makeResetPassword(userServices.resetPassword);

module.exports = {
  signUpEmail,
  signInEmail,
  getPasswordResetCode,
  resetPassword
};
