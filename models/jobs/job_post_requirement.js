const Sequelize = require('sequelize');
const sequelize = require('../../database/database.js');

const JobPostRequirement = sequelize.define('job_post_requirement', {
  job_post_requirement_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(5000),
    allowNull: true
  },
  description: {
    type: Sequelize.STRING(5000),
    allowNull: true
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
  job_requirement_type_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'job_requirement_type',
      key: 'job_requirement_type_id'
    }
  }
}, {
  tableName: 'job_post_requirement',
  freezeTableName: true,
  timestamps: false
});
  
module.exports = JobPostRequirement;