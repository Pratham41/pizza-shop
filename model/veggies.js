// MONGOOSE
const mongoose = require("mongoose");
// PIZZA SCHEMA
const VeggiesSchema = mongoose.Schema(
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

const Veggies = mongoose.model("Veggies", VeggiesSchema);
module.exports = Veggies;
