
const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.get('/:userID', (req, res) => {
  controller.getOrders(req, res)
});
router.post('/', (req, res) => {
  controller.createOrder(req, res)
})
router.patch('/:id', (req, res) => {
  controller.updateOrder(req, res)
})
router.delete('/:id', (req, res) => {
  controller.deleteOrder(req, res)
})
router.delete('/', (req, res) => {
  controller.deleteOrders(req, res)
})

module.exports = router