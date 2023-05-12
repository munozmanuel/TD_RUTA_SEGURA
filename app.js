const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
// const Handlebars = require("handlebars");
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

//Helper limitador
// Registra un helper llamado "limit"
hbs.registerHelper('limit', function(arr, limit) {
  if (!Array.isArray(arr)) {
    return [];
  }

  // Devuelve una copia limitada del arreglo
  return arr.slice(0, limit);
});

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

//trabajar con cookies
app.use(cookieParser());

app.use((req, res) => {
  res.status(404).render('404');
});

//Indicando el puerto de la app
app.listen(3000, function () {
  console.log("Escuchando en puerto 3000")
});