function makeHandleNewPr(workoutsDb, personalRecordsDb) {
  return async function handleNewPr(userId, set, templateId, date, exerciseId) {
    if (set.reps && set.reps <= 15 && set.weight) {
      const personalRecords = await personalRecordsDb.getPersonalRecords(
        templateId,
        userId
      );
      const { recordTable } = personalRecords;
      const currentPr = recordTable[set.reps - 1];

      if (currentPr.weight < set.weight) {
        set.isPr = true;
        let updatedWorkout = null;
        if (currentPr.weight > 0) {
          prWorkout = await workoutsDb.getWorkoutWithSet(
            userId,
            currentPr.setId
          );
          const prExercise = prWorkout.exercises.find(
            (exercise) => exercise.templateId === templateId
          );
          const prSet = prExercise.sets.find(
            (set) => set.id === currentPr.setId
          );
          prSet.isPr = false;
          updatedWorkout = await workoutsDb.updateWorkout(
            prWorkout.id,
            userId,
            prWorkout
          );
        }
        currentPr.weight = set.weight;
        currentPr.date = date;
        currentPr.exerciseId = exerciseId;
        currentPr.setId = set.id;

        await personalRecordsDb.updatePersonalRecords(
          templateId,
          userId,
          personalRecords
        );
        return true;
      }
    }
    return false;
  };
}

module.exports = makeHandleNewPr;
