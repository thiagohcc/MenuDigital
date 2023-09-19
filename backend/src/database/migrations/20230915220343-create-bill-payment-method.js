'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bill_payment_method', {
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
        reference: {
          model: 'payment_method',
          key: 'id',
        }
      },
      billId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'bill_id',
        reference: {
          model: 'bill',
          key: 'id',
        }
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
