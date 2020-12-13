module.exports = {
  up: async (queryInterface) => {
    const districtsDataByName = {
      Caburgua: {
        startTime: '11:23',
        totalityTime: '13:03:41',
        endTime: '14:32',
        duration: 118,
        altitude: 72.2,
      },
      Calafquén: {
        startTime: '11:22',
        totalityTime: '13:03:26',
        endTime: '14:31',
        duration: 88,
        altitude: 71.4,
      },
      Carahue: {
        startTime: '11:23',
        totalityTime: '13:00:36',
        endTime: '14:29',
        duration: 100,
        altitude: 71.7,
      },
      Coñaripe: {
        startTime: '11:22',
        totalityTime: '13:03:45',
        endTime: '14:32',
        duration: 106,
        altitude: 71.8,
      },
      Cunco: {
        startTime: '11:23',
        totalityTime: '13:03:28',
        endTime: '14:31',
        duration: 59,
        altitude: 72.3,
      },
      Curarrehue: {
        startTime: '11:24',
        totalityTime: '13:04:13',
        endTime: '14:32',
        duration: 127,
        altitude: 72.2,
      },
      Gorbea: {
        startTime: '11:23',
        totalityTime: '13:01:45',
        endTime: '14:30',
        duration: 128,
        altitude: 71.7,
      },
      'Isla Mocha': {
        startTime: '11:25',
        totalityTime: '12:59:04',
        endTime: '14:27',
        duration: 63,
        altitude: 71.7,
      },
      Lanco: {
        startTime: '11:24',
        totalityTime: '13:02:15',
        endTime: '14:30',
        duration: 111,
        altitude: 71.4,
      },
      'Las Peinetas': {
        startTime: '11:23',
        totalityTime: '13:04:22',
        endTime: '14:33',
        duration: 129,
        altitude: 72.1,
      },
      Licanray: {
        startTime: '11:24',
        totalityTime: '13:03:18',
        endTime: '14:31',
        duration: 113,
        altitude: 71.8,
      },
      Liquiñe: {
        startTime: '11:24',
        totalityTime: '13:04:35',
        endTime: '14:32',
        duration: 62,
        altitude: 71.7,
      },
      Loncoche: {
        startTime: '11:23',
        totalityTime: '13:02:15',
        endTime: '14:30',
        duration: 111,
        altitude: 71.6,
      },
      'Nueva Imperial': {
        startTime: '11:24',
        totalityTime: '13:01:09',
        endTime: '14:29',
        duration: 90,
        altitude: 71.8,
      },
      'Nueva Toltén': {
        startTime: '11:24',
        totalityTime: '13:00:58',
        endTime: '14:29',
        duration: 116,
        altitude: 71.4,
      },
      Panguipulli: {
        startTime: '11:23',
        totalityTime: '13:03:42',
        endTime: '14:31',
        duration: 41,
        altitude: 71.5,
      },
      Pitrufquén: {
        startTime: '11:23',
        totalityTime: '13:01:47',
        endTime: '14:30',
        duration: 120,
        altitude: 71.8,
      },
      Pucón: {
        startTime: '11:23',
        totalityTime: '13:03:20',
        endTime: '14:32',
        duration: 128,
        altitude: 72.0,
      },
      'Puerto Saavedra': {
        startTime: '11:24',
        totalityTime: '13:00:02',
        endTime: '14:28',
        duration: 122,
        altitude: 71.7,
      },
      Queule: {
        startTime: '11:22',
        totalityTime: '13:01:45',
        endTime: '14:29',
        duration: 40,
        altitude: 71.2,
      },
      Temuco: {
        startTime: '11:23',
        totalityTime: '13:02:14',
        endTime: '14:30',
        duration: 45,
        altitude: 72.0,
      },
      Villarrica: {
        startTime: '11:22',
        totalityTime: '13:02:50',
        endTime: '14:31',
        duration: 129,
        altitude: 71.9,
      },
    };
    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const districts = await queryInterface.sequelize.query(
      'SELECT id, name FROM "Districts"',
    );
    const districtsData = districts[0].map(({ id, name }) => ({ id, name }));
    const infoArray = districtsData.map(({ id: districtId, name }) => ({
      ...districtsDataByName[name],
      ...commonData,
      districtId,
    }));

    await queryInterface.bulkInsert('EclipseInfos', infoArray);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('EclipseInfos', null, {});
  },
};
