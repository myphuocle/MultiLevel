const auth = require('./../auth');
var bcrypt = require('bcrypt');
const salt = auth.salt;
const Users = require('./../../../models/User/index');


module.exports = {
	new: (req, res, next) => {
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
	}
}
