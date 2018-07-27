'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      invNo: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Client',
        },
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Invoices')
  },
}
