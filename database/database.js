const Sequelize = require('sequelize');

const sequelize = new Sequelize('job', 'root', 'password123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
})

module.exports = sequelize;