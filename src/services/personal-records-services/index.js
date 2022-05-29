const makeCreatePersonalRecords = require("./CreatePersonalRecords");
const makeGetPersonalRecords = require("./GetPersonalRecords");
const makeDeletePersonalRecords = require("./DeletePersonalRecords");
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
