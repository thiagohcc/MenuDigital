'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('table', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      isOccupied: {
        type: Sequelize.BOOLEAN,
        field: 'is_occupied',
      }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('table');
  }
};
