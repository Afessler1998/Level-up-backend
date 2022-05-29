const makeCreatePersonalRecords = require("./createPersonalRecords");
const makeGetPersonalRecords = require("./getPersonalRecords");
const makeDeletePersonalRecords = require("./deletePersonalRecords");
const { personalRecordsDb } = require("../../data-access/index");
const makePersonalRecords = require("../../entities/personal-records/index");

const createPersonalRecords = makeCreatePersonalRecords(
  makePersonalRecords,
  personalRecordsDb
);

const getPersonalRecords = makeGetPersonalRecords(personalRecordsDb);

const deletePersonalRecords = makeDeletePersonalRecords(personalRecordsDb);

module.exports = {
  createPersonalRecords,
  getPersonalRecords,
  deletePersonalRecords
};
