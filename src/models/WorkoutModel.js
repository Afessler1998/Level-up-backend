const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  id: { type: String, required: true },
  workoutTitle: { type: String, required: true },
  date: { type: Date, required: true },
  userId: { type: String, required: true },
  exercises: [
    {
      id: { type: String, required: true },
      exerciseName: { type: String, required: true },
      templateId: { type: String, required: true },
      sets: [
        {
          id: { type: String, required: true },
          isPr: { type: Boolean, required: true },
          weight: Number,
          reps: Number,
          rir: Number,
          duration: Number,
          distance: Number,
          speed: Number,
          heartRate: Number,
          calories: Number
        }
      ]
    }
  ]
});

module.exports = mongoose.model("Workout", WorkoutSchema);
