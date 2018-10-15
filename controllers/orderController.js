// const mongoose = require('mongoose');
const Order = require('../models/order.js');
const express = require('express');
const router = express.Router();

//index page
router.get('/', (req, res) => {
	res.render('index.ejs');
});

// router.post('/', (req, res) => {
// 	res.render('show.ejs');
// })



module.exports = router;
