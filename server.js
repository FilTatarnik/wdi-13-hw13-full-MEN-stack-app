const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
		console.log('Port 3000 works');
		console.log('another console log bc i can');
})