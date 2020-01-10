const Sequelize = require('sequelize');
const sequelize = require('../../database/database.js');

const JobRequirementType = sequelize.define('job_requirement_type', {
  job_requirement_type_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  description: {
    type: Sequelize.STRING(75),
    allowNull: true
  }
}, {
  tableName: 'job_requirement_type',
  freezeTableName: true,
  timestamps: false
});
  
module.exports = JobRequirementType;