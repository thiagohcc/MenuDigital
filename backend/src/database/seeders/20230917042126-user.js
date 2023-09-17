'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin123',
        role_id: 1,
      },
    ], {});
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};