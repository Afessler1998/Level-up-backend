const userServices = require("../../services/user-services/index");
const makeSignUpEmail = require("./SignUpEmail");
const makeSignInEmail = require("./SignInEmail");
const makeGetPasswordResetCode = require("./GetPasswordResetCode");
const makeResetPassword = require("./ResetPassword");

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
