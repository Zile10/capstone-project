const con = require('../config')

module.exports = class Product {
  getOrders(req, res) {
    req.user
    con.query("SELECT", (err, result) => {
      if (err) throw err;
      res.status(200);
      res.send(result);
    });
  }
  getOrders(req, res) {
    con.query("SELECT productID, productName, productDescription, productPrice, stock, imgURL FROM products WHERE productID = ?", [req.params.id], (err, result) => {
      if (err) throw err;
      res.send(result[0]);
    });
  }
  createOrders(req, res) {
    con.query("INSERT INTO products set ? ", [req.body], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Product added successfully"}])
    })
  }
  updateOrders(req, res) {
    con.query('UPDATE products SET ? WHERE productID = ?', [req.body, req.params.id], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Product Updated Successfully"}])

    })
  }
  deleteOrders(req, res) {
    con.query('DELETE FROM products WHERE productID = ?;', [req.params.id], (err) => {
      if (err) throw err;
      res.send([req.body, {msg: "Product Deleted Successfully"}])
    })
  }
}