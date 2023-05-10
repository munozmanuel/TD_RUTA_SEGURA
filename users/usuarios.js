const usuarios =  [
      {
        nombre: "Juan",
        img: "https://media.tacdn.com/media/attractions-content--1x-1/0b/39/7a/d4.jpg",
        region: "Metropolitana",
        comentario: "Hoy en la mañana vi un choque en la Ruta 5 Norte, había mucho tráfico y tuve que desviarme."
      },
      {
        nombre: "María",
        img: "https://media.tacdn.com/media/attractions-content--1x-1/0b/39/7a/d4.jpg",
        region: "Valparaíso",
        comentario: "Ayer en la tarde hubo un taco enorme en la Ruta 68, estuve varada por más de una hora."
      }
    ]

const textoUsuario = document.querySelector('.texto')

usuarios.forEach(usuario => { 
    textoUsuario.innerHTML +=
        `
    <div class="user" style="width: 18rem;">
  <img src="${usuario.img}" width="250" class="userImg" alt="...">
  <div class="userBody">
    <h5 class="cuserTitle">${usuario.nombre}</h5>
        <h4 class="userRegion>${usuario.region}</h4>
    <p class="userComment">${usuario.comentario}</p>
  </div>
</div>
;`
})