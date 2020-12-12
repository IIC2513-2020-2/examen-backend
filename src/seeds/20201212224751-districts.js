'use strict';

module.exports = {
  up: async (queryInterface) => {
    const districtsArray = [
      {
        name: 'Isla Mocha',
        region: 'Biobío',
      },
      {
        name: 'Puerto Saavedra',
        region: 'La Araucanía',
      },
      {
        name: 'Carahue',
        region: 'La Araucanía',
      },
      {
        name: 'Nueva Imperial',
        region: 'La Araucanía',
      },
      {
        name: 'Temuco',
        region: 'La Araucanía',
      },
      {
        name: 'Pitrufquén',
        region: 'La Araucanía',
      },
      {
        name: 'Gorbea',
        region: 'La Araucanía',
      },
      {
        name: 'Loncoche',
        region: 'La Araucanía',
      },
      {
        name: 'Lanco',
        region: 'Los Ríos',
      },
      {
        name: 'Panguipulli',
        region: 'Los Ríos',
      },
      {
        name: 'Villarrica',
        region: 'La Araucanía',
      },
      {
        name: 'Pucón',
        region: 'La Araucanía',
      },
      {
        name: 'Licanray',
        region: 'La Araucanía',
      },
      {
        name: 'Caburgua',
        region: 'La Araucanía',
      },
      {
        name: 'Cunco',
        region: 'La Araucanía',
      },
      {
        name: 'Curarrehue',
        region: 'La Araucanía',
      },
      {
        name: 'Las Peinetas',
        region: 'La Araucanía',
      },
      {
        name: 'Coñaripe',
        region: 'Los Ríos',
      },
      {
        name: 'Liquiñe',
        region: 'Los Ríos',
      },
      {
        name: 'Calafquén',
        region: 'Los Ríos',
      },
      {
        name: 'Nueva Toltén',
        region: 'La Araucanía',
      },
      {
        name: 'Queule',
        region: 'La Araucanía',
      },
    ];

    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert(
      'Districts',
      districtsArray.map((district) => ({ ...district, ...commonData })),
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Districts', null, {});
  }
};
