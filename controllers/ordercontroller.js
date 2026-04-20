const sequelize = require("../config/database");
const Order = require("../models/order");
const OrderDetail = require("../models/orderDetail");
const Dress = require("../models/dress");

exports.checkout = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { customer_name, items } = req.body;

    let total = 0;

    // hitung total
    for (let item of items) {
      const dress = await Dress.findByPk(item.dress_id);
      total += dress.price * item.quantity;
    }

    // buat order
    const order = await Order.create(
      { customer_name, total_price: total },
      { transaction: t }
    );

    // simpan detail + update stok
    for (let item of items) {
      const dress = await Dress.findByPk(item.dress_id);

      if (dress.stock < item.quantity) {
        throw new Error("Stock tidak cukup");
      }

      await OrderDetail.create(
        {
          OrderId: order.id,
          DressId: item.dress_id,
          quantity: item.quantity,
          price: dress.price,
        },
        { transaction: t }
      );

      // update stok
      await dress.update(
        { stock: dress.stock - item.quantity },
        { transaction: t }
      );
    }

    await t.commit();
    res.json({ message: "Checkout berhasil", order });

  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: error.message });
  }
};