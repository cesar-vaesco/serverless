const express = require('express');
const Users = require('../models/Users');

const router = express.Router();
// const router = app.Router(); --> probar


router.post('/register', (req, res) => {
    res.send('Soy registro')
});

router.post('/login', (req, res) => {
    res.send('Soy login')
});


module.exports = router
