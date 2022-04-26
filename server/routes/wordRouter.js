const express = require('express');
const router = express.Router();
const { Word } = require('../models/word');

router.get('/', (req, res) => {
    console.log('get all words');
});

module.exports = router;