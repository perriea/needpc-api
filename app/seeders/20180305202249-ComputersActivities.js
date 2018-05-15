'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('computers_activities', [
        { 
          name: 'N/A',
          description: null 
        },
        { 
          name: 'Gamer',
          description: null 
        },
        { 
          name: 'Bureautique',
          description: null 
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('computers_activities', null, {});
  }
};
