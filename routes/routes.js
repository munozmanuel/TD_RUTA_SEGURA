const express = require('express');
const router = express.Router()

const authController = require('../controllers/authController');
const pdfController = require('../controllers/pdfController');

//app routes
router.get("/", (req, res) => {
  res.render("index");
});

//app routes
router.get("/admin", (req, res) => {
  res.render("admin");
});
router.get("/editor", (req, res) => {
  res.render("editor");
});
// Ruta para login
router.get('/login', (req, res) => {
  res.render('login', { alert: false })
})
//Ruta para Registrar nuevo usuario
router.get('/register', (req, res) => {
  res.render('register')
})

//Ruta para consumir datos de la BBDD y contar con la información de cada atractivo y el conteo total.
router.get("/listado", async (req, res) => {
  const fetchAtractivos = fetch(`http://localhost:4000/api/v1/listadoAtractivos`);
  const fetchCount = fetch("http://localhost:4000/api/v1/atractivos/cantidad/count");

  const [resultadosAtractivos, resultadosCount] = await Promise.all([fetchAtractivos, fetchCount]);
  const dataAtractivos = await resultadosAtractivos.json();
  const dataCount = await resultadosCount.json();

  console.log("Atractivos:", dataAtractivos);
  console.log("Count:", dataCount[0].count);

  //Se le pasa la información de atractivos y count a la vista de 'listado' para poder mostrarla.
  res.render("listado", {
    "atractivos": dataAtractivos,
    "count": dataCount[0].count
  });
});

//Ruta para generar el archivo PDF desde la información en BBDD
router.get("/generarPdf", async (req, res) => {
  const fetchAtractivos = fetch(`http://localhost:4000/api/v1/listadoAtractivos`);
  const fetchCount = fetch("http://localhost:4000/api/v1/atractivos/cantidad/count");
  const [resultadosAtractivos, resultadosCount] = await Promise.all([fetchAtractivos, fetchCount]);
  const dataAtractivos = await resultadosAtractivos.json();
  const dataCount = await resultadosCount.json();
  pdfController.generarPdf(dataAtractivos, dataCount, res); // se pasa res como tercer parámetro
});

//MetodosController
router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router;