// MONGOOSE
const mongoose = require("mongoose");
// SECURITY SCHEMA
const SecuritySchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    passOTP: {
      type: String,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Security = mongoose.model("Security", SecuritySchema);
module.exports = Security;
