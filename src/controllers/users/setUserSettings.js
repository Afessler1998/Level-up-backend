function makeSetUserSettings(setUserSettingsService) {
  return async function setUserSettings(request) {
    try {
      const updatedUser = await setUserSettingsService(
        request.userId,
        request.body.settings
      );
      return {
        statusCode: 200,
        response: updatedUser
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeSetUserSettings;
