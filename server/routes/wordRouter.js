const express = require('express');
const router = express.Router();
const { Word } = require('../models');

router.get('/', (req, res) => {
    console.log('get all words');
});

router.get('/currentWord', (req, res) => {
    Word.findOne({
        order: [
            ['id', 'DESC']
        ]
    }).then(word => {
        res.send(word);
    });
});

router.post('/setCurrentWord', (req, res) => {
    Word.create({
        word: req.body.word
    }).then(word => {
        res.send(word);
    });
});

module.exports = router;