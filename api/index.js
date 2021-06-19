
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: '.env' })


const colors = require('colors');


const app = express();
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado...'.green))
    .catch(err => console.log('error:', err))


app.get('*', (req, res) => {
    res.send('Conectando nuestra app');
})

module.exports = app;
