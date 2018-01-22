'use strict';
const express = require('express');
const router = express.Router();


const Users = require('./../../models/User/index');
var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(8);

var passport = require("passport");
var passportJWT = require("passport-jwt");
// var jwt = require('jsonwebtoken');
var JwtStrategy = passportJWT.Strategy;
var ExtractJwt = passportJWT.ExtractJwt;
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'secret';

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
	// console.log('payload received', jwt_payload);
	// console.log("Vuong Pham Test JWT: " + jwt_payload);
	var user = Users.find({ where: {id: jwt_payload.id} })
	.then(user_data =>{
		if (user_data) {
			next(null, user_data);
		} else {
			next(null, false);
		}
	}, err => {
		next(null, false);
	})
});
passport.use(strategy);

// passport.authenticate('jwt', { session: false })

router.use('/user', require('./user'));

router.use('/passport',passport.authenticate('jwt', { session: false }), function(req, res, next){
	console.log("passport okokokokokok");
	res.json({
		success: true,
		results: "passport okokokokokok auth",
	});
});



router.all('*', function(req, res, next) {
  res.json({
    success: true,
    results: res.data,
  });
});

module.exports = router;