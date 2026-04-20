const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("toko_dress", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;