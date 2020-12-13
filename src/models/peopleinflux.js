const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PeopleInflux extends Model {
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
  PeopleInflux.init({
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATE,
    districtId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PeopleInflux',
  });
  return PeopleInflux;
};
