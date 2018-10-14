const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
require('./database/db')
app.listen(PORT, () => {
		console.log('Port 3000 works');
})