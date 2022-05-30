function makeSignUpEmail(makeEmailUser, userDb, encryption) {
  return async function signUpEmail(email, password, confirmPassword) {
    const lowercasedEmail = email.toLowerCase();
    const emailExists = await userDb.getUserByEmail(lowercasedEmail);
    if (emailExists)
      throw new Error("An account with this email already exists");
    const newUser = makeEmailUser(lowercasedEmail, password, confirmPassword);
    const encryptedPassword = await encryption.hash(password, 12);
    newUser.password = encryptedPassword;
    return await userDb.createUser(newUser);
  };
}

module.exports = makeSignUpEmail;
