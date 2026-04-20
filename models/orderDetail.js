const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Dress = require("./dress");
const Order = require("./order");

const OrderDetail = sequelize.define("OrderDetail", {
  quantity: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
});

Dress.hasMany(OrderDetail);
OrderDetail.belongsTo(Dress);

Order.hasMany(OrderDetail);
OrderDetail.belongsTo(Order);

module.exports = OrderDetail;