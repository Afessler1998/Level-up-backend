function makePersonalRecordsDb(PersonalRecordModel) {
  return Object.freeze({
    createPersonalRecords,
    getPersonalRecords,
    updatePersonalRecords,
    deletePersonalRecords
  });

  async function createPersonalRecords(personalRecords) {
    const newPersonalRecords = await PersonalRecordModel.create(
      personalRecords
    );
    return JSON.parse(JSON.stringify(newPersonalRecords));
  }

  async function getPersonalRecords(templateId, userId) {
    const personalRecords = await PersonalRecordModel.findOne({
      templateId,
      userId
    });
    return JSON.parse(JSON.stringify(personalRecords));
  }

  async function updatePersonalRecords(templateId, userId, newPersonalRecords) {
    const personalRecords = await PersonalRecordModel.findOneAndUpdate(
      { templateId, userId },
      newPersonalRecords
    );
    return JSON.parse(JSON.stringify(personalRecords));
  }

  async function deletePersonalRecords(templateId, userId) {
    const personalRecords = await PersonalRecordModel.findOneAndDelete({
      templateId,
      userId
    });
    return JSON.parse(JSON.stringify(personalRecords));
  }
}

module.exports = makePersonalRecordsDb;
