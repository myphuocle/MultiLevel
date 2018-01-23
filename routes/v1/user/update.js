const Users = require('./../../../models/User/index');
const auth = require('./../auth');

module.exports = {
	update: (req, res, next) => {
		console.log("asdasdasdasdasd",req.user.dataValues);
		//console.log("asdasdasdasdasdasd",req.session.user.dataValues);
		// console.log("Params ID: " + req.params.userId);
		// console.log("Auth.currentId: " + auth.currentId);
		if(auth.currentId === req.params.userId){
			Users.update(req.body,{where: {id: req.params.userId}})
			.then( row =>{
				console.log("Update thanh cong");
				res.status(200).json({message: "Update token ok"});
			}, err =>{
				console.log(ex);
			})
			.catch(ex =>{
				console.log(ex);
			})
		}else{
			console.log("Not authorize");
			res.status(500).json({message: "Need auth"});
		}
		
	}
}




































