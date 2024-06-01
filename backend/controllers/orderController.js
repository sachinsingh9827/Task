const Order = require("../models/orderModel");

const newOrder = async (req, res) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      totalPrice,
    } = req.body;

    const order = await Order.create({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      totalPrice,
      paidAt: Date.now(),
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(400).json({ message: "order not found " });
    }
    return res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    return res.status(200).json({
      success: true,
      orders,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllOrders, getSingleOrder, newOrder };
