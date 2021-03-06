const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class District extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.WeatherForecast, { foreignKey: 'districtId' });
      this.hasMany(models.PeopleInflux, { foreignKey: 'districtId' });
      this.hasOne(models.EclipseInfo, { foreignKey: 'districtId' });
    }
  }
  District.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'District',
  });
  return District;
};
