const Sequelize = require('sequelize');
const sequelize = require('../../database/database.js');

const JobPost = sequelize.define('job_post', {
  job_post_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  company_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  job_role: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  job_description: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  is_active: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  contact_person: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  email: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  phone_number: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  salary: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  job_post_industry_id: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: true
  },
  language: {
    type: Sequelize.STRING,
    allowNull: true
  },
  work_hours: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  job_field_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  date_created: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
}, {
  tableName: 'job_post',
  freezeTableName: true,
  timestamps: false
});

module.exports = JobPost;