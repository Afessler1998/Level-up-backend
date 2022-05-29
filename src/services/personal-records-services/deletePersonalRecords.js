function makeDeletePersonalRecords(personalRecordsDb) {
  return async function deletePersonalRecords(templateId, userId) {
    return await personalRecordsDb.deletePersonalRecords(templateId, userId);
  };
}

module.exports = makeDeletePersonalRecords;
