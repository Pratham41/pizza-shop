// MONGOOSE
const mongoose = require("mongoose");
// PIZZA SCHEMA
const SaucesSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    available_stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Sauces = mongoose.model("Sauces", SaucesSchema);
module.exports = Sauces;
