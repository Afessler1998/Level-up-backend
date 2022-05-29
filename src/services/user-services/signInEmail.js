function makeSignInEmail(userDb, encryption, jwt) {
  return async function signInEmail(email, password) {
    const user = await userDb.getUserByEmail(email);
    validPassword = await encryption.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Password is invalid");
    }
    const { id } = user;
    const token = { token: jwt.sign({ id }, process.env.JWT_SECRET) };
    return token;
  };
}

module.exports = makeSignInEmail;
