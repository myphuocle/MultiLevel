'use strict';
const express = require('express');
const router = express.Router();
const user = require('./controller');

// router.param('user_id', user.read.load);
// router.get('/:user_id', user.view.user);
router.get('/', function(){
	console.log("Test User okokokokokokokoko");
});
module.exports = router;