const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];

// определяем объект Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: config.dialect,
    host: config.host,
    define: {
        timestamps: false
    }
});

module.exports = sequelize;