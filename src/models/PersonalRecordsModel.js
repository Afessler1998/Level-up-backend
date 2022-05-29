const mongoose = require("mongoose");

const PersonalRecordsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  exerciseName: { type: String, required: true },
  templateId: { type: String, required: true },
  recordTable: [
    {
      weight: { type: Number, required: true },
      date: { type: Date, required: true },
      setId: { type: String },
      exerciseId: { type: String }
    }
  ]
});

module.exports = mongoose.model("PersonalRecords", PersonalRecordsSchema);
