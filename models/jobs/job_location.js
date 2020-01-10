const Sequelize = require('sequelize');
const sequelize = require('../../database/database.js');

const JobLocation = sequelize.define('job_location', {
    job_location_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    job_post_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'job_post',
        key: 'job_post_id'
      }
    },
    address_street: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    address_city: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    address_country: {
      type: Sequelize.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'job_location',
    freezeTableName: true,
    timestamps: false
  });
  
  module.exports = JobLocation;