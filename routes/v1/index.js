'use strict';
const express = require('express');
const router = express.Router();

const auth = require('./auth');


router.use('/user', require('./user'));







router.all('*', function(req, res, next) {
  res.json({
    success: true,
    results: res.data,
  });
});

module.exports = router;