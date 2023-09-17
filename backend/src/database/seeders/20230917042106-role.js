'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('role', [
      { role_name: 'admin' },
      { role_name:'user' }
    ], {});
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('role', null, {});
  },
};