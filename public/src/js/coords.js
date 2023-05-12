if (navigator.geolocation) {
    let pos = navigator.geolocation.getCurrentPosition(muestraPosicion);

function muestraPosicion(pos){
  let lati = document.getElementById("latitud");
  let longi = document.getElementById("longitud");
  let latitud = pos.coords.latitude.toFixed(2);
  let longitud = pos.coords.longitude.toFixed(2);
  console.log(`la latitud es ${latitud}`);
  console.log(`la longitud es ${longitud}`);
  lati.innerHTML = latitud;
  longi.innerHTML = longitud;

  let cordz = latitud;
  return cordz;
}

}
