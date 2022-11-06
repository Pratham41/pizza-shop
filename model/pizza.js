// MONGOOSE
const mongoose = require("mongoose");
// PIZZA SCHEMA
const PizzaSchema = mongoose.Schema(
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
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Pizza = mongoose.model("Pizza", PizzaSchema);
module.exports = Pizza;
