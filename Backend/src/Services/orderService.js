const Address = require("../Models/addressModel");
const OrderItems = require("../Models/orderItems");
const Order = require("../Models/orderModel");

const cartService = require("./cartService");

const createOrder = async (user, shippingAddress) => {
  let address;
  if (shippingAddress._id) {
    let existAddress = await Address.findById(shippingAddress._id);
    address = existAddress;
  } else {
    address = new Address(shippingAddress);
    address.user = user;
    await address.save();

    user.addresses.push(address);
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItems({
      price: item.price,
      products: item.products,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });

    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }

  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discount: cart.discount,
    totalItem: cart.totalItems,
    shippingAddress: address,
  });

  const savedOrder = await createdOrder.save();
  return savedOrder;
};

const placeOrder = async () => {
  const order = await findOrderById(order);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";
  return await order.save();
};

const confirmedOrder = async () => {
  const order = await findOrderById(order);

  order.orderStatus = "CONFIRMED";

  return await order.save();
};

const shippedOrder = async () => {
  const order = await findOrderById(order);

  order.orderStatus = "SHIPPED";

  return await order.save();
};

const deliveredOrder = async () => {
  const order = await findOrderById(order);

  order.orderStatus = "DELIVER";

  return await order.save();
};

const cancledOrder = async () => {
  const order = await findOrderById(order);

  order.orderStatus = "CANCLED";

  return await order.save();
};

const findOrderById = async (user, orderId) => {
  const order = await Order.findById(orderId)
    .populate("User")
    .populate({ path: "orderItems" })
    .populate("shippingAddress"); //note

  return order;
};

const userOrderHistory = async (userId) => {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean(); //note what lean do? What is Popolate
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllOrders = async () => {
  try {
    const orders = await Order.find()
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean(); //note what lean do? What is Popolate
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteOrder = async (orderId) => {
  try {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createOrder,
  placeOrder,
  confirmedOrder,
  shippedOrder,
  deliveredOrder,
  cancledOrder,
  findOrderById,
  userOrderHistory,
  getAllOrders,
  deleteOrder,
};
