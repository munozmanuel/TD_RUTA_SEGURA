
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`Error. Es probable que tengas bloqueada tu geolocalizacion.(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

let map = L.map('map').setView([-33.0530816, -71.3555968], 13);

// function ubi(){

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   maxZoom: 19,
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
// 	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
// 	maxZoom: 100
// }).addTo(map);

/////// http://leaflet-extras.github.io/leaflet-providers/preview/ ////////

 L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
     }).addTo(map);

let waypoints = [];

document.getElementById('opciones01').addEventListener('change', function (e) {
  let coordenadas01 = e.target.value.split(",");
  waypoints[0] = L.latLng(parseFloat(coordenadas01[0]), parseFloat(coordenadas01[1]));
  console.log(waypoints);

  if (waypoints.length === 2) {
    trazadoDeRuta();
  }
});

// waypoints = [ L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949) ]

document.getElementById('opciones02').addEventListener('change', function (e) {
  let coordenadas02 = e.target.value.split(",");
  waypoints[1] = L.latLng(parseFloat(coordenadas02[0]), parseFloat(coordenadas02[1]));
  console.log(waypoints);

  if (waypoints.length === 2) {
    trazadoDeRuta();
  }
});
let distancia;
let duracion;
function trazadoDeRuta() {

  L.Routing.control({
    show: false,
    waypoints: waypoints,
    routeWhileDragging: false,
    fitSelectedRoutes: true,
    showAlternatives: false,
    lineOptions: {
      styles: [{ color: 'red', opacity: 0.8, weight: 4 }]
    }

  }).on('routesfound', function (e) {

    let rutaTotal = e.routes[0];
    distancia = rutaTotal.summary.totalDistance / 1000;
    duracion = rutaTotal.summary.totalTime / 3600;

    console.log("La distancia es de " + distancia.toFixed(2) + " Kilometros");
    console.log("El viaje dura aproximadamente " + Math.round(duracion) + " Horas");
    let textoComentario = document.querySelector(".textoComentario")
    let cifraDistancia = document.querySelector(".cifraDistancia")
    let cifraDuracion = document.querySelector(".cifraDuracion")

    cifraDuracion.textContent = ` ${duracion.toFixed(0)} Horas`;
    cifraDistancia.textContent = ` ${distancia.toFixed(0)} km`;
    // textoComentario.textContent = `Distancia: ${distancia.toFixed(0)} km | Duración: ${duracion}`;
    
  }).addTo(map);
}