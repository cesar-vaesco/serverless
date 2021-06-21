
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: '.env' })


const colors = require('colors');

const meals = require('./routes/meals');
const orders = require('./routes/orders');

const app = express();
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Iniciando consulta a MongoDB...'.green))
    .catch(err => console.log('error:', err))


app.use('/api/meals', meals);
app.use('/api/orders', orders);

/* app.get('*', (req, res) => {
    res.send('Conectando nuestra app');
}) */

module.exports = app;
