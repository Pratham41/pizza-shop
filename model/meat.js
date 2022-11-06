// MONGOOSE
const mongoose = require("mongoose");
// PIZZA SCHEMA
const MeatSchema = mongoose.Schema(
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

const Meat = mongoose.model("Meat", MeatSchema);
module.exports = Meat;
