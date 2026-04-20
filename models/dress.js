const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Dress = sequelize.define("Dress", {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  stock: DataTypes.INTEGER,
});

module.exports = Dress;