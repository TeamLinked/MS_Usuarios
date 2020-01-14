const app = require('./app');
var cors = require('cors')
const sequelize = require('./sequelize');

app.use(cors())

const bodyParser = require('body-parser')
const { Usuario, Organizacion, Tag} = require('./sequelize')

async function main() {
    await sequelize;
    await app.listen(4015);
    console.log('Server is corriendooooooo');
    console.log(process.env.MYSQL_DATABASE);
    console.log("Express server listening on port " + app.get('port'));
}



app.use(bodyParser.json())


// usuario

//post tag to usuario
app.post('/api/usuario/tags/:usuarioId?', (req, res) => {
    Usuario.findOne({
        where: {
			id: req.params.usuarioId
		},
    })
    .then(usuario => {
        //return res.status(400).status(400).json(usuario);
        //usuario.addTags(req.body.tagId);
        Tag.findOne({
			where: {
			    id: req.body.id
			}
		}).then(function (tag) {
			// Step Three: Add todo to user
			return usuario.addTags([tag])
		})
		.then(usuario => {
		    res.json(usuario);
		})
    })
    .catch(function (err) {
        return res.status(400).status(400).json({ message: err });
    });
});


//delete tag to usuario

app.delete('/api/usuario/tags/:usuarioId?', (req, res) => {
    Usuario.findOne({
        where: {
			id: req.params.usuarioId
		},
    })
    .then(usuario => {
        //return res.status(400).status(400).json(usuario);
        //usuario.addTags(req.body.tagId);
        Tag.findOne({
			where: {
			    id: req.body.id
			}
		}).then(function (tag) {
			// Step Three: Add todo to user
			return usuario.removeTags([tag])
		})
		.then(usuario => {
		    res.json(usuario);
		})
    })
    .catch(function (err) {
        return res.status(400).status(400).json({ message: err });
    });
});

//post organizacion to usuario
app.post('/api/usuario/organizaciones/:usuarioId?', (req, res) => {
    Usuario.findOne({
        where: {
			id: req.params.usuarioId
		},
    })
    .then(usuario => {
        //return res.status(400).status(400).json(usuario);
        //usuario.addTags(req.body.tagId);
        Organizacion.findOne({
			where: {
                id: req.body.id
            }
		}).then(function (organizacion) {
			// Step Three: Add todo to user
			return usuario.addOrganizacion(organizacion)
		})
		.then(usuario => {
		    res.json(usuario);
		})
    })
    .catch(function (err) {
        return res.status(400).status(400).json({ message: err });
    });
});

//delete organizacion to usuario
app.delete('/api/usuario/organizaciones/:usuarioId?', (req, res) => {
    Usuario.findOne({
        where: {
			id: req.params.usuarioId
		},
    })
    .then(usuario => {
        //return res.status(400).status(400).json(usuario);
        //usuario.addTags(req.body.tagId);
        Organizacion.findOne({
            where: {
                id: req.body.id
            }
        }).then(function (organizacion) {
			// Step Three: Add todo to user
			return usuario.removeOrganizacion(organizacion)
		})
		.then(usuario => {
		    res.json(usuario);
		})
    })
    .catch(function (err) {
        return res.status(400).status(400).json({ message: err });
    });
});

//get usuario id
app.get('/api/usuario/:usuarioId?', (req, res) => {
    Usuario.findOne({
        where: {
			id: req.params.usuarioId
		},
		include: [{ all: true }]
    }).then((usuario) => {
        return usuario;
	}).then(user => {
		res.json({
			"user": user
		});
	}).catch(function(err) {
		res.status(500).send('Something broke!');
	});
});

//get usuario by mail

app.get('/api/usuarioByMail', (req, res) => {
    Usuario.findOne({
        where: {
			email: req.body.email
		}
    }).then((usuario) => {
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
        imagen: req.body.imagen,
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

//add Tag to Organización

app.post('/api/organizacion/tags/:organizacionId?', (req, res) => {
    Organizacion.findOne({
        where: {
			id: req.params.organizacionId
		},
    })
    .then(organizacion => {
        //return res.status(400).status(400).json(usuario);
        //usuario.addTags(req.body.tagId);
        Tag.findOne({
			where: {
			    id: req.body.id
			}
		}).then(function (tag) {
			// Step Three: Add todo to user
			return organizacion.addTags([tag])
		})
		.then(organizacion => {
		    res.json(organizacion);
		})
    })
    .catch(function (err) {
        return res.status(400).status(400).json({ message: err });
    });
});


//delete tag to usuario

app.delete('/api/organizacion/tags/:organizacionId?', (req, res) => {
    Organizacion.findOne({
        where: {
			id: req.params.organizacionId
		},
    })
    .then(organizacion => {
        //return res.status(400).status(400).json(usuario);
        //usuario.addTags(req.body.tagId);
        Tag.findOne({
			where: {
			    id: req.body.id
			}
		}).then(function (tag) {
			// Step Three: Add todo to user
			return Organizacion.removeTags([tag])
		})
		.then(organizacion => {
		    res.json(organizacion);
		})
    })
    .catch(function (err) {
        return res.status(400).status(400).json({ message: err });
    });
});


//organizacion por id
app.get('/api/organizacion/:organizacionId?', (req, res) => {
    Organizacion.findOne({
        where: {
			id: req.params.organizacionId
		},
		include: [{ all: true }]
    }).then((organizacion) => {
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
app.post('/api/organizaciones', (req, res) => {
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

app.get('/api/tag/:tagId?', (req, res) => {
    Tag.findOne({
        where: {
			id: req.params.tagId
		},
		//include: [{model: Tag, as: 'tags'}]
    }).then((tag) => {
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
