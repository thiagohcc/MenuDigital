'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      simpleDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'simple_description',
      },
      descripion: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('product');
  }
};
