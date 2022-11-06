const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
require("./config/db");
const userRoute = require("./routes/user");
const pizzaRoute = require("./routes/pizza");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRoute);
app.use("/api/pizza", pizzaRoute);

let port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
