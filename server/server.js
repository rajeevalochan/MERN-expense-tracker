const express = require('express');

const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require("./config/db");

dotenv.config({path:"./config/config.env"})

connectDB();

const app = express();
const PORT = process.env.PORT;

const transactions = require("./routes/transactions");

app.use(express.json);

app.use('/api/v1/transactions', transactions);



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

