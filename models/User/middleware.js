const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(8);
module.exports = function(User){
	let user = this;
	console.log("Test User middleware");
	// user.save({fields: ['password']})
	// .then((user_data) =>{
	// 	console.log("vuongtest middleware user");
	// 	console.log(user_data.password);
	// });
}