const con = require('../config')

module.exports = {
  getOrders(req, res) {
    const orderInfo = req.body
    con.query("SELECT * FROM orders AS o JOIN products AS p ON o.prodID = p.prodID WHERE userID = ?;", 
    [orderInfo.userID],
    (err, result) => {
      if (err) throw err;
      res.status(200);
      res.send(result);
    });
  },
  createOrder(orderData, res) {
    con.query(
      "INSERT INTO orders set ?", 
      [orderData],
      (err) => {
        if (err) throw err
        res.send({msg: "Order Added successfully!"})
      }      
    );
  },
  updateOrder(req, res) {
    con.query('UPDATE orders SET ? WHERE orderID = ?', [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Order Updated Successfully"}])

    })
  },
  deleteOrder(req, res) {
    con.query('DELETE FROM orders WHERE orderID = ?;', [req.params.id], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Product Deleted Successfully"}])
    })
  },
  deleteOrders(req, res) {
    con.query('DELETE FROM orders WHERE userID = ?;', [req.params.id], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Product Deleted Successfully"}])
    })
  }
}