const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


const orderController = require('./controllers/orderController');
require('./database/db')
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use('/orders', orderController);










app.listen(PORT, () => {
		console.log('Port 3000 works');
})