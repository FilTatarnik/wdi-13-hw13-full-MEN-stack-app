const mongoose = require('mongoose');
const Schema = mongoose.Schema;

	const orderSchema = new Schema({
		orderNum: Number, 
		order: String,

	})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;