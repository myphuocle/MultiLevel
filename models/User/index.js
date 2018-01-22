'use strict';

const uuid = require('uuid');
const sequelize = require('sequelize');
const db = require('./../../connections');

db.postgresdb.authenticate()
.then(() => {
	console.log("Postgres is connected");
})
.catch(err => {
	console.log(err.message);
})
const User = db.postgresdb.define('User',{
	id:{
		type: sequelize.UUID,
		defaultValue: sequelize.UUIDV1, 
		unique: true, 
		primaryKey: true
	},
	username: {
		type: sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: sequelize.STRING,
		allowNull: false
	},
	email: {
		type: sequelize.STRING,
		allowNull: false,
		unique: true
	},
	score: {
		type: sequelize.BIGINT,
		defaultValue: 0, 
	},
	phone:{
		type: sequelize.STRING,
	},
	address:{
		type: sequelize.STRING,
	},
	parentId:  sequelize.UUID
})

// require('./middleware')(User);

// require('./virtuals')(User);

// require('./statics')(User);

// require('./methods')(User);

db.postgresdb.sync()
.then(() => {
	// console.log('Tao models User thanh cong');
})

