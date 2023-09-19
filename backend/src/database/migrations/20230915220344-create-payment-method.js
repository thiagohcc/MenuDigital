'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payment_method', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      typeName: {
        type: Sequelize.STRING,
        typeName: false,
        field: 'type_name',
      }
    });
  },
  down: async (queryInterface) => {
    queryInterface.dropTable('payment_method');
  }
};
