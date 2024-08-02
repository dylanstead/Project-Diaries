const Entry = require("../models/Entry")


async function index (req, res) {
    try {
        const entries = await Entry.getAll();
        res.json(entries);
    } catch (err) {
        res.status(500).json({"error": err.message})
    }
};


async function create (req, res) {
    try {
        const data = req.body;
        const result = await Entry.create(data);
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
};


async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.getOneById(id);
        res.json(entry);
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        const entry = await Entry.getOneById(id);
        const result = await entry.destroy();
        res.status(204).end();
    } catch (err) {
        res.status(404).json({"error": err.message})
    }
};

module.exports = {
    index, create, show, destroy
}