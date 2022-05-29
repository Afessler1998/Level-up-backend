function makeGetWorkoutsOnDate(workoutsDb) {
  return async function getWorkoutsOnDate(date, userId) {
    return await workoutsDb.getWorkoutsOnDate(date, userId);
  };
}

module.exports = makeGetWorkoutsOnDate;
