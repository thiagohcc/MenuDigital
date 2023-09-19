import bills from './newBills';

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bill', bills, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bill', null, {});
  }
};
