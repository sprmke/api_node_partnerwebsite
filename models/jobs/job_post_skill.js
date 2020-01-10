/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job_post_skill', {
    job_post_skill_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    job_post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'job_post_id'
      }
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    tableName: 'job_post_skill'
  });
};
