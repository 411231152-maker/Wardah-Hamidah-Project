const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Order = sequelize.define("Order", {
  customer_name: DataTypes.STRING,
  total_price: DataTypes.INTEGER,
});

module.exports = Order;