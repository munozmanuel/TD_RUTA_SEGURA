const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const pg = require('pg');
const app = express();
const { Pool } = pg;
const pool = require('../database/db');

const PDFDocument = require('pdfkit');
const fs = require('fs');



const methodOverride = require('method-override');

app.use(express.json());
app.use(cors());

app.use(methodOverride("_method", { methods: ["GET", "POST"] }));

app.listen(4000, () => {
  console.log("Escuchando en el 4000");
})

//Middlewares
// Configurar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sirviendo carpeta publica
app.use(express.static(__dirname + '/public'));

///////////////////////////////////////////////
//----OBTENIENDO ATRACTIVOS SEGÚN REGION----//
/////////////////////////////////////////////

app.get("/api/v1/atractivos/:regiones_id", async (req, res) => {
  const regiones_id = parseInt(req.params.regiones_id); // parsear el parámetro a Integer
  if (!Number.isInteger(regiones_id)) {
    console.log(typeof regiones_id);
    res.json({mensaje: 'Obteniendo Atractivos'})
      } else {
    const resultado = await pool.query("SELECT atractivos.atractivo_id, atractivos.nombre, atractivos.imgurl, atractivos.descripcion, atractivos.categorias_id, regiones_id from atractivos INNER JOIN regiones ON atractivos.regiones_id = regiones.id where regiones.id = $1 ORDER BY atractivos.atractivo_id desc", [regiones_id]);
    res.json(resultado.rows)
  }
});

//----Obtener atractivos por Categorias----//
app.get("/api/v1/atractivos/categoria/:id_cat", async (req, res) => {
  const id_cat = req.params.id_cat
    const resultado = await pool.query("SELECT atractivos.atractivo_id, atractivos.nombre, atractivos.imgurl, atractivos.descripcion, atractivos.categorias_id, atractivos.regiones_id FROM atractivos INNER JOIN categorias ON atractivos.categorias_id = categorias.id_cat WHERE categorias.id_cat = $1", [id_cat]);
    res.json(resultado.rows)
  });

//----Obtener Listado Total----//
app.get("/api/v1/listadoAtractivos", async (req, res) => {
    const resultado = await pool.query("SELECT atractivos.atractivo_id, atractivos.nombre, atractivos.imgurl, atractivos.descripcion, atractivos.categorias_id, atractivos.regiones_id FROM atractivos");
    res.json(resultado.rows)
  });

////////////////////////////////////
//------AGREGANDO ATRACTIVOS------//
///////////////////////////////////

app.post("/api/v1/atractivos/agregar", async (req, res) => {
  const { nombre, descripcion, imgurl, regiones_id, categorias_id } = req.body;
  const query = "INSERT INTO atractivos (nombre, descripcion, imgurl, regiones_id, categorias_id) VALUES ($1, $2, $3, $4, $5)";
  const values = [nombre, descripcion, imgurl, regiones_id, categorias_id];
  try {
    const result = await pool.query(query, values);
    res.status(201).json({ message: "Registro agregado correctamente" });
  } catch (error) {
    console.error(`Error al agregar el registro: ${error}`);
    res.status(500).json({ message: "Ocurrió un error al agregar el registro" });
  }
});

//////////////////////////////////////
//------ELIMINANDO ATRACTIVOS------//
////////////////////////////////////

app.delete("/api/v1/atractivos/:atractivo_id", async (req, res) => {
  try {
    const atractivo_id = parseInt(req.params.atractivo_id);
    const resultado = await pool.query("DELETE FROM atractivos WHERE atractivo_id = $1 RETURNING atractivo_id", [atractivo_id]);
    if (resultado.rows) {
      res.status(200).json({ atractivo_id: resultado.rows[0].id })
    } else {
      res.status(404).json({ error: "Registro no Existe" })
    }
  } catch (e) {
    res.status(500).json({ error: e })
  }
});

///////////////////////////////////////
//------MODIFICANDO ATRACTIVOS------//
/////////////////////////////////////

app.put("/api/v1/atractivos/editar/:atractivo_id", async (req, res) => {
  const {atractivo_id} = req.params
  const { nombre, descripcion, imgurl, regiones_id, categorias_id } = req.body;
  const resultado = await pool.query("UPDATE atractivos SET nombre =$1, descripcion =$2, imgurl =$3, regiones_id=$4, categorias_id=$5 WHERE atractivo_id=$6", [nombre, descripcion, imgurl, regiones_id, categorias_id, atractivo_id]);
  console.log(resultado),
    res.json({})
})

///////////////////////////////////////
//--------CONTANDO ATRACTIVOS-------//
/////////////////////////////////////


app.get("/api/v1/atractivos/cantidad/count", async (req, res) => {
  const resultado = await pool.query("SELECT COUNT(atractivo_id) FROM atractivos");
  res.json(resultado.rows)
});



///////////////////////////////////////
//--------GENERAR PDF-------//
/////////////////////////////////////
// Generar PDF de listado de atractivos
// app.get("/api/v1/listadoAtractivosPdf", async (req, res) => {
//   try {
//     const resultado = await pool.query("SELECT atractivos.atractivo_id, atractivos.nombre, atractivos.imgurl, atractivos.descripcion, atractivos.categorias_id, atractivos.regiones_id FROM atractivos");

//     // Crear un documento PDF
//     const doc = new PDFDocument();

//     // Establecer el encabezado Content-Disposition para que el navegador descargue el PDF en lugar de mostrarlo en el navegador
//     res.setHeader('Content-Disposition', 'attachment; filename="listadoAtractivos.pdf"');
//     // Establecer el tipo de contenido de la respuesta como application/pdf
//     res.setHeader('Content-Type', 'application/pdf');
//     // Crear un stream de respuesta para el PDF generado
//     doc.pipe(res);

//     // Generar el contenido del PDF a partir de los resultados de la consulta
//     doc.font('./public/src/fonts/Almarai-Regular.ttf').fontSize(14);
//     doc.text('Listado de Atractivos', { align: 'center' });
//     doc.moveDown();

//     // Crear la tabla de datos
//     const table = {
//       headers: ['ID', 'Nombre', 'Imagen', 'Descripción', 'Categoría ID', 'Región ID'],
//       rows: []
//     };

//     resultado.rows.forEach((atractivo) => {
//       table.rows.push([
//         atractivo.atractivo_id.toString(),
//         atractivo.nombre,
//         atractivo.imgurl,
//         atractivo.descripcion,
//         atractivo.categorias_id.toString(),
//         atractivo.regiones_id.toString()
//       ]);
//     });

//     // Definir los estilos de la tabla
//     const tableStyle = {
//       cellPadding: 10,
//       fontSize: 12,
//       lineHeight: 1.5
//     };

//     // Calcular el ancho de columna máximo para ajustar el ancho de la tabla
//     const columnWidth = 540 / table.headers.length;

//     // Dibujar la tabla de datos
//     let y = doc.y;
//     doc.font('./public/src/fonts/Almarai-Bold.ttf');
//     doc.text(table.headers.join(' | '), { y });
//     doc.moveDown();
//     doc.font('./public/src/fonts/Almarai-Regular.ttf');

//     table.rows.forEach((row) => {
//       y = doc.y;
//       row.forEach((cell, index) => {
//         doc.text(cell, { width: columnWidth, align: 'left', continued: index !== row.length - 1 });
//       });
//       doc.moveDown();
//     });

//     // Finalizar el PDF
//     doc.end();
//   } catch (error) {
//     console.error;
//     res.status(500).json({ error: 'Error al generar el PDF' });
//   }
// });







