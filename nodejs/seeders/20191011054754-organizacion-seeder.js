'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Organizacion', [{
        name: 'Org1',
        id_usuario_admin:1,
        descripcion: "descripcion content"
        
      },{
        name: 'Org2',
        id_usuario_admin:1,
        descripcion: "descripcion content"
        
      },{
        name: 'Org3',
        id_usuario_admin:2,
        descripcion: "descripcion content"
        
      },{
        name: 'Org4',
        id_usuario_admin:2,
        descripcion: "descripcion content"
        
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
