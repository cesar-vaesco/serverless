const express = require('express');
const crypto = require('crypto');

const Users = require('../models/Users');

const router = express.Router();
// const router = app.Router(); --> probar


router.post('/register', (req, res) => {
    const { email, password } = req.body;
    crypto.randomBytes(16, (err, salt) => {
        const newSalt = salt.toString('base64');
        crypto.pbkdf2Sync(password, newSalt, 10000, 64, 'sha1', (err, key) => {
            const encryptedPassword = key.toString('base64');
            Users.findOne({ email }).exec()
                .then(user => {
                    if (user) {
                        return user.send('Usuario ya existe')
                    }
                    Users.create({
                        email,
                        password: encryptedPassword,
                        salt: newSalt
                    }).then(() => {
                        res.send('Usuario creado con éxito!')
                    })
                })
        })
    })
});

router.post('/login', (req, res) => {
    res.send('Soy login')
});


module.exports = router
