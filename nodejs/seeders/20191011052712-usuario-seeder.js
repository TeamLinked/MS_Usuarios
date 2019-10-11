'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Usuarios', [{
        nombre: 'John Doe',
        apellido:"Gonzales",
        email:"jdgonzales@lkj.com",
        password:"lkjkljl",
        identificacion:"73883993930",
        nacionalidad:"Colombiana",
        fecha_nac:"2016-08-09T04:05:02.000Z",
        perf_profesional:"",
        perf_personal:""
      },{
        nombre: 'John Doe',
        apellido:"Gonzales",
        email:"jdgonzales@lkj.com",
        password:"lkjkljl",
        identificacion:"73883993930",
        nacionalidad:"Colombiana",
        fecha_nac:"2016-08-09T04:05:02.000Z",
        perf_profesional:"",
        perf_personal:""
      },{
        nombre: 'John',
        apellido:"Fernandez",
        email:"jdgonzales1@lkj.com",
        password:"lkjkljl",
        identificacion:"73883993930",
        nacionalidad:"Colombiana",
        fecha_nac:"2016-08-09T04:05:02.000Z",
        perf_profesional:"",
        perf_personal:""
      },{
        nombre: 'Doe',
        apellido:"Gonzales",
        email:"jdgonzales2@lkj.com",
        password:"lkjkljl",
        identificacion:"73883993930",
        nacionalidad:"Colombiana",
        fecha_nac:"2016-08-09T04:05:02.000Z",
        perf_profesional:"",
        perf_personal:""
      },{
        nombre: 'Jairo',
        apellido:"Perez",
        email:"jdgonzales3@lkj.com",
        password:"lkjkljl",
        identificacion:"73883993930",
        nacionalidad:"Colombiana",
        fecha_nac:"2016-08-09T04:05:02.000Z",
        perf_profesional:"",
        perf_personal:""
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
