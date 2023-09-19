import users from './seedersData/newUser';

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', users, {});
  },


  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};