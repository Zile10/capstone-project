const order = require('../models/orderModel');

module.exports = {
  getOrders(req, res)  {
    try {
      order.getOrders(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },

  createOrder(req, res) {
    try {
      order.createOrder(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  updateOrder(req, res) {
    try {
      product.updateOrder(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  deleteOrder(req, res) {
    try {
      product.deleteOrder(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
  deleteOrders(req, res) {
    try {
      product.deleteOrders(req, res)
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  },
}