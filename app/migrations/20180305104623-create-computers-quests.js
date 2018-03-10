'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ComputersQuests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      activityId: {
        type: Sequelize.INTEGER,
        references: { model: 'ComputersActivities', key: 'id' },
        allowNull: false
      },
      quest: {
		    type: Sequelize.STRING(512),
        allowNull: false
      },
      domain: {
		    type: Sequelize.STRING(64),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ComputersQuests');
  }
};