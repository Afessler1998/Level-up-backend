const mongoose = require("mongoose");

const ExerciseTemplateSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  exerciseName: { type: String, required: true },
  exerciseType: { type: String, required: true },
  dataOptions: {
    speed: { type: Boolean, required: true },
    distance: { type: Boolean, required: true },
    duration: { type: Boolean, required: true },
    reps: { type: Boolean, required: true },
    rir: { type: Boolean, required: true },
    weight: { type: Boolean, required: true },
    heartRate: { type: Boolean, required: true },
    calories: { type: Boolean, required: true }
  }
});

module.exports = mongoose.model("Exercise Template", ExerciseTemplateSchema);
