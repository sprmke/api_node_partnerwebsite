const Sequelize = require('sequelize');
const sequelize = require('../../database/database.js');

const Company = sequelize.define('job_post', {
  company_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  business_industry_id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    references: {
      model: 'business_industry',
      key: 'business_industry_id'
    }
  },
  company_name: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  description: {
    type: Sequelize.STRING(1000),
    allowNull: true
  },
  website: {
    type: Sequelize.STRING(100),
    allowNull: true
  }
}, {
  tableName: 'company',
  freezeTableName: true,
  timestamps: false
});

module.exports = Company;
