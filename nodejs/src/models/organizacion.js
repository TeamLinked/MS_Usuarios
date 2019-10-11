module.exports = (sequelize, type) => {
    return sequelize.define('organizacion', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: {
            type: type.STRING,
            allowNull: false

        },
        id_usuario_admin: {
            type: type.INTEGER,
            allowNull: false

        },
        descripcion: {
            type: type.TEXT,
            allowNull: true

        },


    })
}