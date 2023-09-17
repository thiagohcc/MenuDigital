"use strict";

exports.__esModule = true;
var config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Password123!',
    database: process.env.DB_NAME || 'MD-DB',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z'
    },
    logging: true
};
module.exports = config;