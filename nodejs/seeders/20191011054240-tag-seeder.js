'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Tag', [{
        nombre: 'Etiqueta1'
        
      }, {
        nombre: 'Etiqueta2'
        
      }, {
        nombre: 'Etiqueta3'
        
      }, {
        nombre: 'Etiqueta4'
        
      }, {
        nombre: 'Etiqueta5'
        
      }, {
        nombre: 'Etiqueta6'
        
      }]);
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
