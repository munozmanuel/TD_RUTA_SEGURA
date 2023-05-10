


if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(muestraPosicion);
}
var latitud;
var longitud;
  function muestraPosicion(pos) {
    latitud = pos.coords.latitude;
    longitud = pos.coords.longitude;

    fetch(`http://api.weatherapi.com/v1/current.json?key=cf4e8637571e4adfbad41437232503&q=${latitud},${longitud}&aqi=no`)

  .then(response => response.json())  
  .then(json => {
    let data = json.current;
    let temp = data.temp_c;
    let location = json.location;
    let ciudad = location.region;
    document.getElementById("geo").innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="/imgs/sol_blanco.png" class="card-img-top" alt="Clima">
    <div class="card-body">
    <h2 class="ciudad">Región de ${ciudad}</h2>
    <p class="card-text">${temp}ºC</p>
    </div>
  </div>`;
  // console.log(data);

  })
  .catch(err => console.log('Solicitud fallida', err)); 
  }

  export var latitud;
  export var longitud;





