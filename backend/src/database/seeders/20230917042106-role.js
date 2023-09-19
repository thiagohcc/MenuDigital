import roles from './newRole';

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('role', roles, {});
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('role', null, {});
  },
};