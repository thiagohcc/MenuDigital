'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bill', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      clientName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'client_name',
      },
      amount: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        defaultValue: 0
      },
      isOpen: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        field: 'is_open',
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      startTime: {
        type: Sequelize.TIME,
        field: 'start_time'
      },
      closeTime: {
        type: Sequelize.TIME,
        field: 'close_time'
      },
      tableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'table_id',
        reference: {
          model: 'table',
          key: 'id',
        }
      }
    });
  },
  down: async (queryInterface) => {
    queryInterface.dropTable('bill');
  }
};
