const Sequelize = require('sequelize');
const sequelize = require('../../database/database.js');

const JobPostType = sequelize.define('job_post_type', {
  job_post_type_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  job_post_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'job_post',
      key: 'job_post_id'
    }
  },
  job_type_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'job_type',
      key: 'job_type_id'
    }
  }
}, {
  tableName: 'job_post_type',
  freezeTableName: true,
  timestamps: false
});
  
module.exports = JobPostType;
