const { Router } = require('express');

const entriesController = require('../controllers/entries.js');

const entriesRouter = Router();

entriesRouter.get("/", entriesController.index)
entriesRouter.post("/", entriesController.create)
entriesRouter.get("/:id", entriesController.show)
entriesRouter.delete("/id", postController.destroy)

module.exports = entriesRouter;
