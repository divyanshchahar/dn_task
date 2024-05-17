// ###########
// # IMPORTS #
// ###########
const mongoose = require('mongoose');
const express = require('express');
const entriesRouter = require('./router/entriesRouter');

// ############
// # DATABASE #
// ############

// Adding event listner
mongoose.connection.on('connected', () =>
	console.log('Established connection to Database')
);

// Establishing DB connection
mongoose.connect(process.env.DB).catch((error) => {
	console.log(`connecting to DB resulted in the following error ${error}`);
});

const port = process.env.PORT || 8000; // port

const app = express(); // instance of express app

// ##############
// # MIDDLEwARE #
// ##############
app.use(express.json());

// Router middlewares
app.use('/entries', entriesRouter);

// Launching Application
app.listen(port, (error) => {
	if (error) {
		console.error(
			`trying to listen on ${port} resulted in following error ${error}`
		);
		return;
	}
	console.log(`app is listening on port ${port}`);
});
