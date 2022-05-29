function makeSignUpEmail(makeEmailUser, userDb, encryption) {
  return async function signUpEmail(email, password, confirmPassword) {
    const emailExists = await userDb.getUserByEmail(email);
    if (emailExists)
      throw new Error("An account with this email already exists");
    const newUser = makeEmailUser(email, password, confirmPassword);
    const encryptedPassword = await encryption.hash(password, 12);
    newUser.password = encryptedPassword;
    return await userDb.createUser(newUser);
  };
}

module.exports = makeSignUpEmail;
