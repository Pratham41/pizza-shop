// MONGOOSE
const mongoose = require("mongoose");
// PIZZA SCHEMA
const CheeseSchema = mongoose.Schema(
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

const Cheese = mongoose.model("Cheese", CheeseSchema);
module.exports = Cheese;
