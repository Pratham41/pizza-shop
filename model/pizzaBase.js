// MONGOOSE
const mongoose = require("mongoose");
// PIZZA SCHEMA
const PizzaBaseSchema = mongoose.Schema(
  {
    size: {
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

const PizzaBase = mongoose.model("PizzaBase", PizzaBaseSchema);
module.exports = PizzaBase;
