function makeGetUserSettings(getUserById) {
  return async function getUserSettings(response) {
    try {
      const user = await getUserById(response.userId);
      return {
        statusCode: 200,
        response: user.userSettings
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetUserSettings;
