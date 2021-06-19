const express = require('express');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('hola orders')
});

router.post('/', (req, res) => {
    res.send('post orders')
});

module.exports = router
