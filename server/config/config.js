const databaseConfig = require('./database');

exports.portConfig = process.env.PORT || 5000;
exports.databaseConfig = databaseConfig;
