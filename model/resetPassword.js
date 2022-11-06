// MONGOOSE
const mongoose = require("mongoose");
// SECURITY SCHEMA
const ResetPasswordSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

const ResetPassword = mongoose.model("ResetPassword", ResetPasswordSchema);
module.exports = ResetPassword;
