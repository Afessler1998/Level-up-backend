function makeDeleteUserData(userDb) {
    return async function deleteUserData(userId) {
      return await userDb.deleteUserData(userId);
    };
  }
  
  module.exports = makeDeleteUserData;