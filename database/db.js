const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost')

monogoose.connection.on('connection established', () => {
		console.log("connected");
})
monogoose.connection.on('connection not established', () => {
		console.log("diconnected");
})