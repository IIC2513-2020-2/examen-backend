const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EclipseInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.District, { foreignKey: 'districtId' });
    }
  }
  EclipseInfo.init({
    startTime: DataTypes.STRING,
    totalityTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    altitude: DataTypes.DECIMAL,
    districtId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'EclipseInfo',
  });
  return EclipseInfo;
};
