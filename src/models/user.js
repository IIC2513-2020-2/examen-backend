const bcrypt = require('bcrypt');

const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(/* models */) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeSave: async (instance) => {
        if (instance.changed('password')) {
          /* eslint-disable-next-line no-param-reassign */
          instance.password = await bcrypt.hash(instance.password, 10);
        }
      },
    },
  });
  return User;
};
