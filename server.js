const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./database/db')


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));




const orderController = require('./controllers/orderController');
app.use('/orders', orderController);

// app.get('/', (req, res) => {
// 	res.redirect('index.ejs')
// })








app.listen(PORT, () => {
		console.log('Port 3000 works');
})