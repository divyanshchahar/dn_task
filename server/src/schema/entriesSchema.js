const mongoose = require('mongoose');

const entriesSchema = new mongoose.Schema({
	name: {
		type: String,
		maxLength: 100,
		minLength: 1,
		required: true,
		unique: true,
	},
	content: {
		type: String,
		minLength: 1,
		required: true,
	},
	createdAt: {
		type: Date,
		default: () => Date.now(),
		immutable: true,
	},
	updatedAt: {
		type: Date,
		default: () => Date.now(),
	},
});

const Entry = mongoose.model('entries', entriesSchema);

module.exports = Entry;
