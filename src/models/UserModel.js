const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  socialsId: { type: String },
  resetCode: {
    code: { type: String },
    createdAt: { type: Date }
  },
  userSettings: {
    newPrPopup: { type: Boolean, required: true },
    hapticFeedback: { type: Boolean, required: true }
  }
});

module.exports = mongoose.model("User", UserSchema);
