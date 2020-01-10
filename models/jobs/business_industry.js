/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('business_industry', {
    business_industry_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    business_industry_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'business_industry'
  });
};
