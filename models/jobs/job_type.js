const Sequelize = require('sequelize');
const sequelize = require('../../database/database.js');

const JobType = sequelize.define('job_type', {
  job_type_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'job_type',
  freezeTableName: true,
  timestamps: false
});

module.exports = JobType;