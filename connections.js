"use strict"
const sequelize = require('sequelize');
const postgresdb = new sequelize({
	database: "database_demo" | ,
	username: "postgres" | ,
	password: "postgres" | ,
	host: "localhost" | ,
	port: 5432,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
	dialect: 'postgres'
})



exports.postgresdb = postgresdb
