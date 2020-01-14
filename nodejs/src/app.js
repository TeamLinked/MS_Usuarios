const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const morgan = require('morgan');

app.use(require('./routes/index'))
app.use(morgan('dev'));



// var mysql = require("mysql");
// var bodyParser = require('body-parser');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// //Database connection
// app.use(function(req, res, next){
// global.connection = mysql.createConnection({
// host : process.env.DATABASE_HOST,
// port : process.env.MYSQL_PORT,
// user : process.env.MYSQL_USER,
// password : process.env.MYSQL_PASSWORD,
// database : process.env.MYSQL_DATABASE
// });

// connection.connect();
// next();
// });



// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

// // configurar cabeceras http
// app.use((req, res, next) => {
// res.header('Access-Control-Allow-Origin', '*');
// res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
// res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
// res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
// next();
// });

// app.use('/', indexRouter);
// app.use('/api/v1/usuarios', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
//   });
  
//   // error handler
//   app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });


const Sequelize = require('sequelize')










  module.exports = app;