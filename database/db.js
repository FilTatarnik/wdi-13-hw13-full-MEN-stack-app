const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/workOrders', { useNewUrlParser: true })

mongoose.connection.on('connection established', () => {
		console.log("connected");
})
mongoose.connection.on('connection not established', () => {
		console.log("diconnected");
})
mongoose.connection.on('error', (error) => {
		console.log(error);
})