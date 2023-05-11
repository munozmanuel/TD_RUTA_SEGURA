const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const Handlebars = require("handlebars");
const hbs = require('hbs');
const methodOverride = require('method-override');


// app.use(methodOverride('_method'));
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));

//Middlewares
// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/routes'));
app.use('/', require('./routes/crud'));

//Sirviendo carpeta publica
app.use(express.static(__dirname + '/public'));
app.use(express.static("public"));

//configurando Hbs y rutas de Views|Partials
app.set("view engine", "hbs");
app.set('views', __dirname + '/views')
hbs.registerPartials(__dirname + "/views/partials");

//ConfiguracionLoginRegister
// Variables de entorno
dotenv.config({path: './env/.env'})

// //trabajar con cookies
app.use(cookieParser());

// app.use((req, res) => {
//   res.status(404).render('404');
// });
app.use((req, res) => {
  res.status(404).render('404');
});

// app.use((req, res, next) => {
//   res.status(404).render('404', {
//     titulo: "404",
//     descripcion: 'Pagina no encontrada'
//   })
// });

//Indicando el puerto de la app
app.listen(3000, function () {
  console.log("Escuchando en puerto 3000")
});





