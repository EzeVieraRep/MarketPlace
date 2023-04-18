const express = require('express');
const morgan = require('morgan');
const cors = require('cors');


const app = express();

app.use(cors())
app.set("port", 3000);
app.use(morgan("dev"));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 4000


module.exports = app;