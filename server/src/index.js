const mongoose = require('mongoose');

// establishing connection to database using promise based approach
const createConnection = async () => {
	const connection = await mongoose
		.createConnection(process.env.DB)
		.asPromise();

	if (connection.readyState) console.log('Established connection to database');

	try {
	} catch (error) {
		console.error(
			`The following erreo occurred while connectiong to DB: ${error}`
		);
	}
};

createConnection();
