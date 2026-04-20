const express = require("express");
const app = express();
const sequelize = require("./config/database");

const dressRoutes = require("./routes/dressRoutes");
const orderRoutes = require("./routes/orderRoutes");

app.use(express.json());

app.use("/dress", dressRoutes);
app.use("/order", orderRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});