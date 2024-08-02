const express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger');

const entriesRouter = require('./routers/entries');
const usersRouter = require('./routers/users');



const app = express();

app.use(cors())
app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.status(200).json({
      title: "Your private diary",
      description: "Create an account and make entries to your diary"
    })
  })

app.use("/entries", entriesRouter);
app.use("/users", usersRouter);

module.exports = app;