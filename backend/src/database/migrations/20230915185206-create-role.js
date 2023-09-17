'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('role', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      roleName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'role_name',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('role');
  }
};
