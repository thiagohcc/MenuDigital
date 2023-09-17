'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bill-payment-method', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      paymentMethodId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'payment_method_id',
      },
      billId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'bill_id',
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('bill-payment-method');
  }
};
