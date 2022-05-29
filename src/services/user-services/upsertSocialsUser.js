function makeGetUserBySocialsId(makeSocialsUser, UserDb) {
  return async function getUserBySocialsId(socialsId) {
    let user = await UserDb.getUserBySocialsId(socialsId);
    if (!user) {
      const newUser = makeSocialsUser(socialsId);
      user = await UserDb.createUser(newUser);
    }
    return user;
  };
}

module.exports = makeGetUserBySocialsId;
