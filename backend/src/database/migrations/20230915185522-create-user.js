'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      roleId: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        field: 'role_id',
        references: {
          model: 'role',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET DEFAULT'
      }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('user');
  }
};
