const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    const usersArray = [
      {
        name: 'Example user',
        email: 'user@example.org',
        password: await bcrypt.hash('hola.123', 10),
      },
      {
        name: 'Test user',
        email: 'test@example.org',
        password: await bcrypt.hash('hola.123', 10),
      },
    ];

    const commonData = {
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await queryInterface.bulkInsert(
      'Users',
      usersArray.map((user) => ({ ...user, ...commonData })),
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
