const orderServices = require("../Services/orderService");

const createOrder = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await orderServices.createOrder(user, req.body);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findOrderById = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await orderServices.findOrderById(user, req.params.id);
    // console.log("ReqParamsId--", req.params.id)

    console.log("Created Orders:", createdOrder)
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const orderHistory = async (req, res) => {
  const user = req.user;
  try {
    let createdOrder = await orderServices.userOrderHistory(user._id);
    return res.status(201).send(createdOrder);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};  

module.exports = { createOrder, findOrderById, orderHistory };
