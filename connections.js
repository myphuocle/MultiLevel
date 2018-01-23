"use strict"
require('dotenv').config();
const sequelize = require('sequelize');
const postgresdb = new sequelize({
	database: process.env.POSTGRES_DB,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASS,
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	pool: {
		max: process.env.POSTGRES_POOL_MAX,
		min: process.env.POSTGRES_POOL_MIN,
		acquire: process.env.POSTGRES_ACQUIRE,
		idle: process.env.POSTGRES_IDLE
	},
	dialect: 'postgres'
})



exports.postgresdb = postgresdb
