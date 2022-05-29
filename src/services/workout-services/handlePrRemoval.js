function makeHandlePrRemoval(workoutsDb, personalRecordsDb) {
  return async function handlePrRemoval(userId, reps, templateId) {
    const workoutsWithExercise = await workoutsDb.getAllWorkoutsWithExercise(
      templateId,
      userId
    );

    let prevPr = {
      weight: 0
    };
    let prevPrWorkoutId;
    let prevPrExerciseId;
    let prevPrWorkout;
    workoutsWithExercise.forEach((workout) => {
      workout.exercises.forEach((exercise) => {
        if (exercise.templateId === templateId) {
          exercise.sets.forEach((set) => {
            if (!set.isPr && set.reps === reps && set.weight > prevPr.weight) {
              prevPr = set;
              prevPrWorkoutId = workout.id;
              prevPrExerciseId = exercise.id;
              prevPrWorkout = workout;
            }
          });
        }
      });
    });

    const personalRecords = await personalRecordsDb.getPersonalRecords(
      templateId,
      userId
    );

    const { recordTable } = personalRecords;

    if (prevPr.weight !== 0) {
      prevPr.isPr = true;
      await workoutsDb.updateWorkout(prevPrWorkout.id, userId, prevPrWorkout);

      const index = prevPr.reps - 1;
      recordTable[index].weight = prevPr.weight;
      recordTable[index].date = new Date(prevPrWorkout.date);
      recordTable[index].setId = prevPr.id;
      recordTable[index].exerciseId = prevPrExerciseId;
      await personalRecordsDb.updatePersonalRecords(
        templateId,
        userId,
        personalRecords
      );
    } else {
      const index = reps - 1;
      recordTable[index].weight = 0;
      recordTable[index].setId = "null";
      recordTable[index].exerciseId = "null";
      await personalRecordsDb.updatePersonalRecords(
        templateId,
        userId,
        personalRecords
      );
    }
    return;
  };
}

module.exports = makeHandlePrRemoval;
