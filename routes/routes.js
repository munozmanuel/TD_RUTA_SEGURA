const express = require('express');
const router = express.Router()

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

// router.get("/listado", (req, res) => {
//   res.render("listado")
//   });

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



router.get('/login', (req,res)=>{
  res.render('login', {alert:false})
})
router.get('/register', (req,res)=>{
  res.render('register')
})


router.get('/404', (req,res)=>{
  res.render('404')
})

// app.use((req, res, next) => {
//   res.status(404).render('404', {
//     titulo: "404",
//     descripcion: 'Pagina no encontrada'
//   })
// });

//ROUTER METODOS CONTROLLER
router.post('/register', authController.register)
router.post('/login', authController.login)


// router.get("/", (req, res) => {
//   res.render("404");
// });


module.exports = router;