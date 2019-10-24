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


// usuario
//get usuario id
app.get('/api/usuarios/:usuarioId?', (req, res) => {
    Usuario.findByPk(req.params.usuarioId).then((usuario) => {
        return usuario;
	}).then(user => {
		res.json({
			"user": user
		});
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
});

// get all usuarios
app.get('/api/usuarios', (req, res) => {
    Usuario.findAll().then(usuarios => res.json(usuarios))
        .catch(
            function (err) {
                return res.json({ message: err })
            })
})

//delete user, id = usuarioId?
app.delete('/api/usuarios/:usuarioId?', (req, res) => {
    Usuario.findByPk(req.params.usuarioId).then((usuario) => {
        return usuario.destroy();
    }).then(() => {
        //res.redirect('/api/usuarios');
    })
    .catch(
        function (err) {
            return res.status(400).json({ message: "Id not found" })
        });

})

//put user, id =  usuarioId?
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

//Post usuario
app.post('/api/usuarios', (req, res) => {
    console.log(req.body)
    Usuario.create(req.body)
        .then(usuario => res.json(usuario))
        .catch(
            function (err) {
                return res.status(400).status(400).json({ message: err })
            }


        );
})


//Organizaciones//

//organizacion por id
app.get('/api/organizacion/:organizacionId?', (req, res) => {
    Organizacion.findByPk(req.params.organizacionId).then((organizacion) => {
        return organizacion;
	}).then(organizacion => {
		res.json({
			"organizacion": organizacion
		});
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
});
// get all usuarios
app.get('/api/organizaciones', (req, res) => {
    Organizacion.findAll().then(organizaciones => res.json(organizaciones))
        .catch(
            function (err) {
                return res.json({ message: err })
        })
})

//delete user, id = usuarioId?
app.delete('/api/organizaciones/:organizacionId?', (req, res) => {
    Organizacion.findByPk(req.params.organizacionId).then((organizacion) => {
        return organizacion.destroy();
    }).then(() => {
        //res.redirect('/api/usuarios');
    })
    .catch(
        function (err) {
            return res.status(400).json({ message: "Id not found" })
        });

})

//put user, id =  usuarioId?
app.put("/api/organizaciones/:organizacionId?", (req, res) =>

    Organizacion.update({

        nombre: req.body.nombre,
        id_usuario_admin: req.body.id_usuario_admin,
        descripcion: req.body.descripcion
    },
        {
            where: {
                id: req.params.organizacionId
            }
        }).then((result) => {
            console.log(req.body);
            // console.log(req.body.content);
            res.json(result)
        })
);

//Post usuario
app.post('/api/organizacion', (req, res) => {
    console.log(req.body)
    Organizacion.create(req.body)
        .then(organizacion => res.json(organizacion))
        .catch(
            function (err) {
                return res.status(400).status(400).json({ message: err })
            }


        );
})

//TAGS//

app.get('/api/tags/:tagId?', (req, res) => {
    Usuario.findByPk(req.params.tagId).then((tag) => {
        return tag;
	}).then(tag => {
		res.json({
			"tag": tag
		});
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
});

// get all usuarios
app.get('/api/tags', (req, res) => {
    Tag.findAll().then(tags => res.json(tags))
        .catch(
            function (err) {
                return res.json({ message: err })
        })
})

//delete user, id = usuarioId?
app.delete('/api/tags/:tagId?', (req, res) => {
    Tag.findByPk(req.params.organizacionId).then((tag) => {
        return tag.destroy();
    }).then(() => {
        //res.redirect('/api/usuarios');
    })
    .catch(
        function (err) {
            return res.status(400).json({ message: "Id not found" })
        });

})

//put user, id =  usuarioId?
app.put("/api/tags/:tagId?", (req, res) =>

    Tag.update({

        nombre: req.body.nombre,
        
    },
        {
            where: {
                id: req.params.tagId
            }
        }).then((result) => {
            console.log(req.body);
            // console.log(req.body.content);
            res.json(result)
        })
);

//Post usuario
app.post('/api/tags', (req, res) => {
    console.log(req.body)
    Tag.create(req.body)
        .then(tag => res.json(tag))
        .catch(
            function (err) {
                return res.status(400).status(400).json({ message: err })
            }
        );
})

main();
// app.listen(3000, () => console.log ('Servidor iniciado en 3000'))
