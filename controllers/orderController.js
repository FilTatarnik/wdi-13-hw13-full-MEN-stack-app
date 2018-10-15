// const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Orders = require('../models/order');

//index page
// router.get('/', (req, res) => {
// 	res.render('index.ejs');
// });
//index
router.get('/',(req, res) => {
	Orders.find({},(err, madeOrders) => {
		if(err) {
			console.log(err);
		} else {
			res.render('index.ejs', {
				orders: madeOrders
			})
		}
	})
})

//new
router.get('/new', (req, res) => {
	res.render('new.ejs');
})

// router.post('/', (req, res) => {
// 	res.render('show.ejs');
// })

// router.post('/order/new', (req, res) => {
// 	res.render('new.ejs')
// })

module.exports = router;
