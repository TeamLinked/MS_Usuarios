module.exports = (sequelize, type) => {
  var Usuario = sequelize.define('usuario', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: type.STRING,
      allowNull: false

    },
    apellido: {
      type: type.STRING,
      allowNull: false

    },
    email: {
      type: type.STRING,

      allowNull: false,

      validate: {
        isEmail:true
      },
      unique: {
          args: true,
          msg: 'Email address already in use!'
      }


    },
    password: {
      type: type.STRING,
      allowNull: false

    },
    identificacion: {
      type: type.STRING,
      allowNull: false

    },
    imagen: {
      type: type.STRING,
      allowNull: true
    },
    nacionalidad: {
      type: type.STRING,
      allowNull: true

    },
    fecha_nac: {
      type: type.DATE,
      allowNull: true

    },
    perf_profesional: {
      type: type.TEXT,
      allowNull: true

    },
    perf_personal: {
      type: type.TEXT,
      allowNull: true

    },
  })
  
  return Usuario;
}