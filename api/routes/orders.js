const express = require('express');
const Orders = require('../models/Orders');

const router = require('express').Router();
// const router = app.Router(); --> probar

router.get('/', (req, res) => {
    Orders.find()
        .exec()
        .then(x => res.status(200).send(x));
});

router.get('/:id', (req, res) => {
    Orders.findById(req.params.id)
        .exec()
        .then(x => res.status(200).send(x))
})

router.post('/', (req, res) => {
    Orders.create(req.body)
        .then(x => res.status(201).send(x))
});


router.put('/:id', (req, res) => {
    Orders.findByIdAndUpdate(req.params.id, req.body)

});

router.delete('/:id', (req, res) => {
    Orders.findOneAndDelete(req.params.id)
        .exec()
        .then(() => res.sendStatus(204))
})



module.exports = router
