const billPaymentMethod = require('./seedersData/newBillPaymentMethod');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('bill_payment_method', billPaymentMethod, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('bill_payment_method', null, {});
  }
};
