function makeUserDb(UserModel, WorkoutModel, TemplateModel, PersonalRecordsModel) {
  return Object.freeze({
    createUser,
    getUserById,
    getUserBySocialsId,
    getUserByEmail,
    updateUser,
    deleteUserData,
  });

  async function createUser(user) {
    const newUser = await UserModel.create(user);
    return JSON.parse(JSON.stringify(newUser));
  }

  async function getUserById(userId) {
    const user = await UserModel.findOne({ id: userId });
    return JSON.parse(JSON.stringify(user));
  }

  async function getUserBySocialsId(socialsId) {
    const user = await UserModel.findOne({ socialsId });
    return JSON.parse(JSON.stringify(user));
  }

  async function getUserByEmail(email) {
    const user = await UserModel.findOne({ email });
    return JSON.parse(JSON.stringify(user));
  }

  async function updateUser(userId, newUser) {
    const user = await UserModel.findOneAndUpdate({ id: userId }, newUser);
    return JSON.parse(JSON.stringify(user));
  }

  async function deleteUserData(userId) {
    await UserModel.findOneAndDelete({
      id: userId
    });
    await WorkoutModel.deleteMany({
      userId
    });
    await TemplateModel.deleteMany({
      userId
    });
    await PersonalRecordsModel.deleteMany({
      userId
    });
  }
}

module.exports = makeUserDb;
