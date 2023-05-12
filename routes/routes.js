const express = require('express');
const router = express.Router()
const PDF = require('pdfkit');
const fs = require('fs');


const authController = require('../controllers/authController')

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


router.get("/listado", async (req, res) => {
  const fetchAtractivos = fetch(`http://localhost:4000/api/v1/listadoAtractivos`);
  const fetchCount = fetch("http://localhost:4000/api/v1/atractivos/cantidad/count");

  const [resultadosAtractivos, resultadosCount] = await Promise.all([fetchAtractivos, fetchCount]);
  const dataAtractivos = await resultadosAtractivos.json();
  const dataCount = await resultadosCount.json();

  console.log("Atractivos:", dataAtractivos);
  console.log("Count:", dataCount[0].count);

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

  var doc = new PDF();
  doc.text('Listado total de Atractivos Ordenados por ID (desc)', {
    align: 'center'
  });

  // Establecer la posición inicial de la tabla
  let tableTop = 100;
  let rowHeight = 50;
  let tableWidth = 450;
  let cellPadding = 5;

  // Definir la función para dibujar una celda con borde
  const drawCell = (text, x, y, width) => {
    doc.rect(x, y, width, rowHeight).stroke();
    doc.text(text, x + cellPadding, y + cellPadding, { width: width - (cellPadding * 2), align: 'left' });
  };

  // Dibujar los encabezados de la tabla con borde
  const headers = ['ID', 'Categoria', 'Nombre', 'Region ID'];
  let currentY = tableTop;
  headers.forEach((header, index) => {
    const x = tableTop + (index * (tableWidth / headers.length));
    drawCell(header, x, currentY, tableWidth / headers.length);
  });

  // Dibujar las filas de la tabla con borde
  currentY += rowHeight;
  dataAtractivos.forEach((atractivo, rowIndex) => {
    const row = [atractivo.atractivo_id.toString(), atractivo.categorias_id, atractivo.nombre, atractivo.regiones_id];
    row.forEach((cell, colIndex) => {
      const x = tableTop + (colIndex * (tableWidth / headers.length));
      const y = currentY + (rowIndex * rowHeight);
      drawCell(cell, x, y, tableWidth / headers.length);
    });
  });

  doc.end();

  res.setHeader('Content-Disposition', 'attachment; filename="generado.pdf"');
  res.setHeader('Content-Type', 'application/pdf');

  doc.pipe(res);
});


router.get('/login', (req, res) => {
  res.render('login', { alert: false })
})
router.get('/register', (req, res) => {
  res.render('register')
})

//ROUTER METODOS CONTROLLER
router.post('/register', authController.register)
router.post('/login', authController.login)


module.exports = router;