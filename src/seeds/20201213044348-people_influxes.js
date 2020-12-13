module.exports = {
  up: async (queryInterface) => {
    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const districts = await queryInterface.sequelize.query(
      'SELECT id FROM "Districts"',
    );
    const districtIds = districts[0].map(({ id }) => id);
    const influxesBulkInsertPromises = districtIds.map((districtId) => {
      const influxesArray = [
        {
          quantity: Math.floor(Math.random() * 1500) + 3001,
          date: new Date('2020-12-10'),
          districtId,
        },
        {
          quantity: Math.floor(Math.random() * 3001) + 10000,
          date: new Date('2020-12-11'),
          districtId,
        },
      ];
      return queryInterface.bulkInsert(
        'PeopleInfluxes',
        influxesArray.map((influx) => ({ ...influx, ...commonData })),
      );
    });
    await Promise.all(influxesBulkInsertPromises);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('PeopleInfluxes', null, {});
  },
};
