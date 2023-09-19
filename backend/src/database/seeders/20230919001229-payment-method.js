const paymentMethods = require('./seedersData/newPaymentMethod');

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('payment_method', paymentMethods, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('payment_method', null, {});
  }
};
