const express = require('express');
const router = require('./routes');
const app = express.Router()


///////////////////////////////////////////////
//----OBTENIENDO ATRACTIVOS SEGÚN REGION----//
/////////////////////////////////////////////
app.get("/:regiones_id", async (req, res) => {
  const regiones_id = req.params.regiones_id;
  const resultados = await fetch(`http://localhost:4000/api/v1/atractivos/${regiones_id}`);
  const data = await resultados.json();
  console.log(data);
  res.render("admin", { "atractivos": data })
})

//----Obtener atractivos por categoría----//
app.get("/api/v1/atractivos/categoria/:categoria", async (req, res) => {
  const categoria = req.params.categoria;
  const resultados = await fetch(`http://localhost:4000/api/v1/atractivos/categoria/${categoria}`);
  const data = await resultados.json();
  console.log(data);
  res.render("admin", { "atractivos": data })
})

//----Obtener listado----//
// app.get("/listado", async (req, res) => {
//     const resultados = await fetch(`http://localhost:4000/api/v1/listadoAtractivos`);
//     const data = await resultados.json();
//     console.log(data);
//     res.render("listado", { "atractivos": data })
//   })

////////////////////////////////////
//------AGREGANDO ATRACTIVOS------//
///////////////////////////////////
app.post("/mantenedor", async (req, res) => {
  try {
    const { nombre, descripcion, imgurl, regiones_id, categorias_id } = req.body;
    const resultado = await fetch("http://localhost:4000/api/v1/atractivos/agregar", {
      method: "POST",
      body: JSON.stringify({ nombre, descripcion, imgurl, regiones_id, categorias_id }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const resultados = await fetch(`http://localhost:4000/api/v1/atractivos/${regiones_id}`);
    const data = await resultados.json();
    console.log(data);
    res.render("admin", { "atractivos": data })
  } catch (e) {
    res.render("error", { "error": "Problemas al Insertar registro" });
  }
});

//////////////////////////////////////
//------ELIMINANDO ATRACTIVOS------//
////////////////////////////////////
app.delete("/mantenedor/:atractivo_id", async (req, res) => {
  const atractivo_id = Number(req.params.atractivo_id);
  if (isNaN(atractivo_id)) {
    console.error("atractivo_id no es un número válido");
    return;
  }
  try {
    const resultado = await fetch(`http://localhost:4000/api/v1/atractivos/${atractivo_id}`, {
      method: "DELETE"
    });
    res.redirect('back');
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el elemento");
  }
});


///////////////////////////////////////
//------MODIFICANDO ATRACTIVOS------//
/////////////////////////////////////
app.post('/mantenedor/update', async (req, res) => {
  // let datos = req.body;
  // console.log(datos);
  const { atractivo_id, nombre, descripcion, imgurl, regiones_id, categorias_id } = req.body;
  let body = { nombre: nombre, descripcion: descripcion, imgurl: imgurl, regiones_id: regiones_id, categorias_id: categorias_id }

  await fetch(`http://localhost:4000/api/v1/atractivos/editar/${atractivo_id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });
  res.redirect('back');
  // res.redirect('/admin');
});

///////////////////////////////////////////////
//----Atractivos Mantenedor EDITOR----//
/////////////////////////////////////////////
app.get("/editor/:regiones_id", async (req, res) => {
  const regiones_id = req.params.regiones_id;
  const resultados = await fetch(`http://localhost:4000/api/v1/atractivos/${regiones_id}`);
  const data = await resultados.json();
  console.log(data);
  res.render("editor", { "atractivos": data })
})

///////////////////////////////////////////////
//----COUNT Atractivos - Mantenedor EDITOR----//
/////////////////////////////////////////////
app.get("/api/v1/atractivos/cantidad/:id_cat", async (req, res) => {
  const id_cat = req.params.id_cat;
  const resultados = await fetch(`http://localhost:4000/api/v1/atractivos/cantidad/${id_cat}`);
  const data = await resultados.json();
   console.log(data);
   res.render("editor", { count: data.count });
  //  res.render("editor", { "atractivos": data })
})

// const respuesta = await fetch(`http://localhost:4000/api/v1/atractivos/cantidad/${id_cat}`);
// const data = await respuesta.json();
// const cantidadAtractivos = data[0].count;
// const cantidadAtractivosElemento = document.getElementById("cantidad-atractivos");
// cantidadAtractivosElemento.textContent = cantidadAtractivos;



module.exports = app;




