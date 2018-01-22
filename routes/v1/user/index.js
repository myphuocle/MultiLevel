'use strict';
const express = require('express');
const router = express.Router();
const user = require('./controller');
const Users = require('./../../../models/User/index');
var bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(8);

var jwt = require('jsonwebtoken');
var passportJWT = require("passport-jwt");
var ExtractJwt = passportJWT.ExtractJwt;
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'secret';


///// API user in here

// router.get('/', function(){
// 	// console.log("Test User okokokokokokokoko");
// });

// Signup
router.post('/signup', function(req, res, next){
	// console.log("Test User okokokokokokokoko");
	console.log(req.body);
	Users.create({
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, salt, null),
		email: req.body.email,
		parentId: req.body.parentId
	})
	.then(users => {
		// console.log('Add User Success');
		// console.log(users);
		res.status(200)
		.json({
			status: 'success',
			data: users,
			message: 'Add User Success'
		});
	})
	.catch( err => {
		console.log(err.message);
		res.status(500)
		.json({
			status: 'Fail',
			message: 'Sign Up Error'
		});	
	})
});
// Login - Signin
router.post('/login',function(req, res, next) {
	console.log("login");
	if(req.body.username && req.body.password){
	    var username = req.body.username;
	    var password = bcrypt.hashSync(req.body.password, salt, null);
	}
	Users.find({where: { username: username}})
	.then(user_data => {
		if(!user_data){
			res.status(401)
			.json({
				status: 'User not found',
				message: 'Check your user'
			});
		}	
		bcrypt.compare(user_data.password, password, (err, success)=> {
			if(err) res.status(401).json({message:"Passwords did not match"});
			var payload = {id: user_data.id};
		    var token = jwt.sign(payload, jwtOptions.secretOrKey);
		    res.status(200).json({message: "Create token ok", token: token});
		});
	}, err =>{

	})
	.catch(ex =>{
		console.log(ex.message);
		res.status(500)
		.json({
			status: 'Fail',
			message: 'Login Error'
		});		
	})
})


module.exports = router;