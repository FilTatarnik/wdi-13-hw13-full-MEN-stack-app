const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/order'

mongoose.connect('mongodb://localhost/Orders', { useNewUrlParser: true })

mongoose.connection.on('connection established', () => {
		console.log("connected");
})
mongoose.connection.on('connection not established', () => {
		console.log("diconnected");
})
mongoose.connection.on('error', (error) => {
		console.log(error);
})