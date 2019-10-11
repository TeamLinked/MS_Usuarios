const app = require('./app');
const sequelize = require('./sequelize');


const bodyParser = require('body-parser')
const { Usuario, Organizacion, Tag } = require('./sequelize')

async function main() {
    await sequelize;
    await app.listen(3000);
    console.log('Server is corriendooooooo');
    console.log(process.env.MYSQL_DATABASE)
}



app.use(bodyParser.json())


// create a usuario

// get all usuarios
app.get('/api/usuarios', (req, res) => {
    Usuario.findAll().then(usuarios => res.json(usuarios))
        .catch(
            function (err) {
                return res.json({ message: err })
            })
})

app.delete('/api/usuarios/:usuarioId?', (req, res) => {
    Usuario.findByPk(req.params.usuarioId).then((usuario) => {
        return usuario.destroy();
    }).then(() => {
        res.redirect('/api/usuarios');
    })
    .catch(
        function (err) {
            return res.status(400).json({ message: "Id not found" })
        });

})

app.put("/api/usuarios/:usuarioId?", (req, res) =>

    Usuario.update({

        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
        identificacion: req.body.identificacion,
        nacionalidad: req.body.nacionalidad,
        fecha_nac: req.body.fecha_nac,
        perf_profesional: req.body.perf_profesional,
        perf_personal: req.body.perf_personal
    },
        {
            where: {
                id: req.params.usuarioId
            }
        }).then((result) => {
            console.log(req.body);
            // console.log(req.body.content);
            res.json(result)
        })
);
// create a usuario
// app.post('/api/orgPorUserId', (req, res) => {
//     Usuario.findByPk(req.body.id).then(() => {

//         Organizacion({
//             nombre: req.body.nombre,
//             descripcion: req.body.descripcion,
//             id_usuario_admin: req.body.id,
//         }).then((resut)=>{
//             res.json(result)
//         })
//     })
//     .catch(
//         function (err) {
//             return res.status(400).json({ message: "Id not found" })
//         });
    
// })

app.post('/api/usuarios', (req, res) => {
    console.log(req.body)
    Usuario.create(req.body)
        .then(usuario => res.json(usuario))
        .catch(
            function (err) {
                return res.status(400).status(400).json({ message: err })
            }


        );
    /*
    {
        "nombre":"" ,
        "apellido":"",
        "email":"",
        "password":"",
        "identificacion":"",
        "nacionalidad":"",
        "fecha_nac":"",
        "perf_profesional":"",
        "perf_personal":""
    }
            
    */



})






// find organizacions belonging to one usuario or all organizacions
app.get('/api/organizacions/:usuarioId?', (req, res) => {
    let query;
    if (req.params.usuarioId) {
        query = Organizacion.findAll({
            include: [
                { model: Usuario, where: { id: req.params.usuarioId } },
                { model: Tag }
            ]
        })
    } else {
        query = Organizacion.findAll({ include: [Tag, Usuario] })
    }
    return query.then(organizacions => res.json(organizacions))
})






// find organizacions by tag
app.get('/api/organizacions/:tag/tag', (req, res) => {
    Usuarios.findAll({
        include: [
            { model: Tag, where: { name: req.params.tag } }
        ]
    })
        .then(organizacions => res.json(organizacions))
})




main();
// app.listen(3000, () => console.log ('Servidor iniciado en 3000'))
