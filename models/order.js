const mongoose = require('mongoose');
const Schema = mongoose.Schema;

	const orderSchema = new mongoose.Schema({
		orderNum: {type: Number, required: true},
		orderName: String

	})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;