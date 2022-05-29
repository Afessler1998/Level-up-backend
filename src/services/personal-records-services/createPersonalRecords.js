function makeCreatePersonalRecords(makePersonalRecords, personalRecordsDb) {
  return async function createPersonalRecords(
    userId,
    exerciseName,
    templateId
  ) {
    const personalRecords = makePersonalRecords(
      userId,
      exerciseName,
      templateId
    );
    return await personalRecordsDb.createPersonalRecords(personalRecords);
  };
}

module.exports = makeCreatePersonalRecords;
