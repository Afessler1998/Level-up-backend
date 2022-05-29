function makeGetPersonalRecords(personalRecordsDb) {
  return async function getPersonalRecords(templateId, userId) {
    return await personalRecordsDb.getPersonalRecords(templateId, userId);
  };
}

module.exports = makeGetPersonalRecords;
