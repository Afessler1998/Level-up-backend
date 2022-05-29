function makeGetPersonalRecords(getPersonalRecordsService) {
  return async function getPersonalRecords(request) {
    try {
      const { templateId } = request.params;
      const personalRecords = await getPersonalRecordsService(
        templateId,
        request.userId
      );
      return {
        statusCode: 200,
        response: personalRecords
      };
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = makeGetPersonalRecords;
