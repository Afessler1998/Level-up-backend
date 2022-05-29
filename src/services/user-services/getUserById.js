function makeGetUserById(userDb) {
  return async function getUserById(userId) {
    return await userDb.getUserById(userId);
  };
}

module.exports = makeGetUserById;
