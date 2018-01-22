"use strict"
const sequelize = require('sequelize');
const postgresdb = new sequelize({
	database: "database_demo",
	username: "postgres",
	password: "postgres",
	host: "localhost",
	port: 5432,
	dialect: 'postgres'
})



exports.postgresdb = postgresdb
