function makeGetPasswordResetCode(userDb, makeResetCode, sendEmail) {
  return async function getPasswordResetCode(email) {
    const user = await userDb.getUserByEmail(email);
    const resetCode = makeResetCode();
    user.resetCode.code = resetCode;
    user.resetCode.createdAt = new Date();
    await userDb.updateUser(user.id, user);

    const subject = "Password reset code";
    const text = `Your 6 digit password reset code is ${resetCode}`;
    emailres = await sendEmail(email, subject, text);

    return resetCode;
  };
}

module.exports = makeGetPasswordResetCode;
