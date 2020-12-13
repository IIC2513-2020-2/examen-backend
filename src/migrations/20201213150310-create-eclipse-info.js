module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('EclipseInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      startTime: {
        type: Sequelize.STRING,
      },
      totalityTime: {
        type: Sequelize.STRING,
      },
      endTime: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.INTEGER,
      },
      altitude: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable('EclipseInfos');
  },
};
