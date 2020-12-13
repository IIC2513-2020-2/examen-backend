const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class WeatherForecast extends Model {
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
  WeatherForecast.init({
    forecast: DataTypes.STRING,
    date: DataTypes.DATE,
    min: DataTypes.INTEGER,
    max: DataTypes.INTEGER,
    districtId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'WeatherForecast',
  });
  return WeatherForecast;
};
