'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bill_product_consume', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
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
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'product_id',
        reference: {
          model: 'product',
          key: 'id',
        }
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('bill_product_consume');
  }
};
