'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payment-method', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      amount: {
        type: Sequelize.STRING,
        typeName: false,
        fild: 'type_name',
      }
    });
  },
  down: async (queryInterface) => {
    queryInterface.dropTable('payment-method');
  }
};
