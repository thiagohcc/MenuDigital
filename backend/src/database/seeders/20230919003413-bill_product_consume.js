const billProductConsume = require('./seedersData/newBillProductConsume');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bill_product_consume', billProductConsume, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bill_product_consume', null, {})
  }
};
