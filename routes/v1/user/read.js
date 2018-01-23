const auth = require('./../auth');
var bcrypt = require('bcrypt');
const salt = auth.salt;
var jwt = require('jsonwebtoken');
var jwtOptions = auth.jwtOptions;
const Users = require('./../../../models/User/index');


module.exports = {
	login: (req, res, next) => {
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
	}
}
