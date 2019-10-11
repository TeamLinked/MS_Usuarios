const Sequelize = require('sequelize')
const UsuarioModel = require('./models/usuario')
const OrganizacionModel = require('./models/organizacion.js')
const TagModel = require('./models/tag')

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.MYSQL_PORT,
  dialect: 'mysql',
})

const Usuario = UsuarioModel(sequelize, Sequelize)
// OrganizacionTag will be our way of tracking relationship between Organizacion and Tag models
// each Organizacion can have multiple tags and each Tag can have multiple organizations
const OrganizacionTag = sequelize.define('organizacion_tag', {})

const UsuarioOrganizacion = sequelize.define('usuario_organizacion', {})


const Organizacion = OrganizacionModel(sequelize, Sequelize)
const Tag = TagModel(sequelize, Sequelize)

Organizacion.belongsToMany(Tag, { through: OrganizacionTag, unique: false })
Tag.belongsToMany(Organizacion, { through: OrganizacionTag, unique: false })

Organizacion.belongsToMany(Usuario, { through: UsuarioOrganizacion, unique: false })
Usuario.belongsToMany(Organizacion, { through: UsuarioOrganizacion, unique: false })

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    sequelize.sync({ force: true })
      .then(() => {
        console.log(`Database & tables created!`)
      })
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit()
  });



module.exports = {
  Usuario,
  Organizacion,
  Tag
}