const express = require('express');
const Entry = require('../schema/entriesSchema');

const router = express.Router();

router.route('/').post(async (req, res) => {
	try {
		const entry = await Entry.create({
			name: req.body.name,
			content: req.body.content,
		});

		res.status(200).send(entry);
	} catch (error) {
		console.error(error);
		res.status(500).send();
	}
});

router.route('/').get(async (req, res) => {
	try {
		const entries = await Entry.find();

		res.status(200).send(entries);
	} catch (error) {
		console.error(error);

		res.status(500).send();
	}
});

router.route('/:id').get(async (req, res) => {
	try {
		const entry = await Entry.findById(req.params.id);

		res.status(200).send(entry);
	} catch (error) {
		console.error(error);
		res.status(500).send();
	}
});

router.route('/').put(async (req, res) => {
	try {
		const entry = await Entry.findById(req.body._id);

		entry.name = req.body.name;
		entry.content = req.body.content;

		const updatedEntry = await entry.save();

		res.status(200).send(updatedEntry);
	} catch (error) {
		console.error(error);
		res.status(500).send();
	}
});

router.route('/:id').delete(async (req, res) => {
	try {
		const isDeleted = await Entry.findByIdAndDelete(req.params.id);

		if (!isDeleted) return res.status(200).send();

		res.status(500).send();
	} catch (error) {
		console.error(error);
		res.status(500).send();
	}
});

module.exports = router;
