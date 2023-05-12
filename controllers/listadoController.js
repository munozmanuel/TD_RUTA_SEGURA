const fetch = require('node-fetch');

exports.renderListado = async (req, res) => {
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
};
