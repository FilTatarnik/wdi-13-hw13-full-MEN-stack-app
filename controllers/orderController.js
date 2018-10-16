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

// show
router.get('/:id', (req, res) => {
	Orders.findById(req.params.id, 
		(err, foundOrder) => {
			if(err){console.log(`---------- ERROR ---------- \n`, err);}
			 	else {
			 		console.log(`---------- FOUND ROOM ---------- \n`, foundOrders);
			 		res.render('show.ejs', {
			 			orders: foundOrders
			 		});
			 }
	})
})
// edit

//update
//create
router.post('/', (req, res) => {
	Orders.create(req.body, (err, madeOrders) => {
			console.log(req.body, 'this is the req.body');
			if(err){
				console.log(err);
			} else {
				res.redirect('/orders')
			}
	})
})

//delete

// router.post('/', (req, res) => {
// 	res.render('show.ejs');
// })

// router.post('/order/new', (req, res) => {
// 	res.render('new.ejs')
// })

module.exports = router;
