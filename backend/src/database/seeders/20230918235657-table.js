const tables = require('./seedersData/newTable');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('table', tables, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('table', null, {});
  }
};
