require("dotenv").config()
const fs = require('fs');

const db = require("./connect.js")
const sql = fs.readFileSync('./server/db/setup.sql').toString();

db.query(sql)
    .then(data => console.log("Set-up complete."))
    .catch(error => console.log(error));
