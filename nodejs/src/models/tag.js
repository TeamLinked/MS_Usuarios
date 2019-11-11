module.exports = (sequelize, type) => {
    var Tag = sequelize.define('tag', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: type.STRING
    })
    
    return Tag;
}