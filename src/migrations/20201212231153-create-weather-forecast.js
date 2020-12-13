module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('WeatherForecasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      forecast: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      min: {
        type: Sequelize.INTEGER,
      },
      max: {
        type: Sequelize.INTEGER,
      },
      districtId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Districts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('WeatherForecasts');
  },
};
