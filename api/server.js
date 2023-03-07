const express = require('express');
const cors = require('cors');
const app = express();
const {userRoutes, orderRoutes, productRoutes} = require('./routes') 

app.use('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// app.use('/users')

app.listen(3000, () => {
  console.log('listening on 3000');
})