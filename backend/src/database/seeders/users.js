'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        name: 'admin',
        email: 'admin@admin.com',
        password: 'admin123',
        roleId: 0,
      }
    ], {});
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};