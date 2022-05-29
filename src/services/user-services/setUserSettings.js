function makeSetUserSettings(userDb) {
  return async function setUserSettings(userId, userSettings) {
    const user = await userDb.getUserById(userId);
    const mutUser = JSON.parse(JSON.stringify(user));
    mutUser.userSettings = userSettings;
    return await userDb.updateUser(userId, mutUser);
  };
}

module.exports = makeSetUserSettings;
