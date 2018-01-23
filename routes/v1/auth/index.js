// 'use strict';
const express = require('express');
const router = express.Router();

const Users = require('./../../../models/User/index');
var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(8);

var passport = require("passport");
var passportJWT = require("passport-jwt");
var jwt = require('jsonwebtoken');
var JwtStrategy = passportJWT.Strategy;
var ExtractJwt = passportJWT.ExtractJwt;
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'secret';
var currentId = "";

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
	var user = Users.find({ where: {id: jwt_payload.id} })
	.then(user_data =>{
		if (user_data) {

			//module.exports.currentId = user_data.id;
			// console.log("currentId: " + currentId);
			return next(null, user_data);
		} 
		next(null, false);
	}, err => {
		next(null, false);
	})
});
passport.use(strategy);

// passport.serializeUser(function(user, cb) {
// 	console.log("sksksksksk",user)
//     cb(null, JSON.stringify(user));
// });

// passport.deserializeUser(function(packet, cb) {
//     cb(null,JSON.parse(packet));
// });

// module.exports = router;
module.exports.salt = salt;

module.exports.jwtOptions = jwtOptions;
module.exports.auth = passport.authenticate('jwt', { session: false })



