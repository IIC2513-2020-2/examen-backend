module.exports = {
  up: async (queryInterface) => {
    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const forecastOptions = [
      'Despejado',
      'Parcial',
      'Nublado',
      'Lluvia',
    ];
    const randomForecast = (options) => options[Math.floor(Math.random() * 4)];
    const districts = await queryInterface.sequelize.query(
      'SELECT id FROM "Districts"',
    );
    const districtIds = districts[0].map(({ id }) => id);
    const forecastsBulkInsertPromises = districtIds.map((districtId) => {
      const forecastsArray = [
        {
          forecast: randomForecast(forecastOptions),
          date: new Date('2020-12-10'),
          min: Math.floor(Math.random() * 11),
          max: Math.floor(Math.random() * 15) + 11,
          districtId,
        },
        {
          forecast: randomForecast(forecastOptions),
          date: new Date('2020-12-11'),
          min: Math.floor(Math.random() * 11),
          max: Math.floor(Math.random() * 15) + 11,
          districtId,
        },
      ];
      return queryInterface.bulkInsert(
        'WeatherForecasts',
        forecastsArray.map((forecast) => ({ ...forecast, ...commonData })),
      );
    });
    await Promise.all(forecastsBulkInsertPromises);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('WeatherForecasts', null, {});
  },
};
