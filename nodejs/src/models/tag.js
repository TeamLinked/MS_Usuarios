module.exports = (sequelize, type) => {
    var Tag = sequelize.define('tag', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nombre: type.STRING
    })
    
    Tag.associate = models => {
        Tag.belongsToMany(models.User, {through: 'TagUsuarios', as: 'usuarios'});
    };
    
    return Tag;
}