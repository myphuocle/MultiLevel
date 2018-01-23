'use strict';
const express = require('express');
const router = express.Router();
const user = require('./controller');

const auth = require('./../auth');

///// API User in here

// Signup
router.post('/signup', 
	user.create.new
);
// Login - Signin
router.post('/login',
	user.read.login
)

// Need authorization for this api

router.use(auth.auth);
//Some API in here
router.put('/update/:userId',
	user.update.update
)





module.exports = router;