function buildMakePersonalRecords(makeId, validateExerciseName) {
  return function makePersonalRecords(userId, exerciseName, templateId) {
    validateExerciseName(exerciseName);

    const personalRecords = Object.freeze({
      id: makeId(),
      userId,
      exerciseName,
      templateId,
      recordTable: Object.freeze([
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        }),
        Object.freeze({
          weight: 0,
          date: new Date(),
          setId: "",
          exerciseId: ""
        })
      ])
    });

    return personalRecords;
  };
}

module.exports = buildMakePersonalRecords;
