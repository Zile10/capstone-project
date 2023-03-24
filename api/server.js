const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser')
const {userRoutes, orderRoutes, productRoutes} = require('./routes') 
require('dotenv').config
const port = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000);
app.use(express.json(), cors());

// Allowing frontend access to backend
app.use((req, res, next)=> {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next();
});

// Root Route
app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, '/views/index.html'));
})
// Use router to handle product and user routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', orderRoutes);


app.listen(port, () => {
  console.log('Server is running...');
  console.log(`Listening on port ${port}...`);
})