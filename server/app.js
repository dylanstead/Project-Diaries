const express = require('express');
const cors = require('cors');

const logger = require('./middleware/logger');


const app = express();

app.use(cors())
app.use(express.json());
app.use(logger);


app.use("/entries", entriesRouter);
app.use("/users", userRouter);

module.exports = app;