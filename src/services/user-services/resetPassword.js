function makeResetPassword(userDb, encryption, validatePassword) {
  return async function resetPassword(
    email,
    resetCode,
    password,
    confirmPassword
  ) {
    validatePassword(password, confirmPassword);
    const user = await userDb.getUserByEmail(email);

    if (user.resetCode.code !== resetCode)
      throw new Error("Invalid reset code");

    user.resetCode = {
      code: "",
      createdAt: new Date()
    };

    const timeFromCodeCreation =
      new Date() - new Date(user.resetCode.createdAt);
    const fiveMinutes = 1000 * 60 * 5;
    if (fiveMinutes - timeFromCodeCreation <= 0) {
      await userDb.updateUser(user.id, user);
      throw new Error("Reset code has timed out after 5 minutes");
    }

    const encryptedPassword = await encryption.hash(password, 12);
    user.password = encryptedPassword;
    await userDb.updateUser(user.id, user);
    return "Password has been reset";
  };
}

module.exports = makeResetPassword;
