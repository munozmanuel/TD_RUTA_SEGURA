
document.getElementById('opciones02').addEventListener('change', function (e) {

    let dataValue = e.target.selectedOptions[0].getAttribute('dataValue');

    const divAtractivos = document.getElementById('atractivos');
    // divAtractivos.style.display = '';
    // const CTA = document.getElementById('CTA');
    // CTA.style.display = '';

    // alert(`se seleccionó ${nombre}`)
    creaAtractivos(dataValue);
    // console.log(e.target.dataValue);    
})

const creaAtractivos = async (dataValue) => {
    try {
        // const res = await fetch("./src/regiones/atacama.json")
        const res = await fetch(`http://localhost:4000/api/v1/atractivos/${dataValue}`)
        const data = await res.json()
        document.getElementById('atractivos').innerHTML = ''; //Limpia antes de generar la vista
        generarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const generarCards = datos => {
    datos.forEach(atractivo => {
        const atractivos = document.getElementById('atractivos')
        const div = document.createElement("div");
        div.classList.add("cardAtractivo");
        div.innerHTML = `
            <img class="cardImagen" src="${atractivo.imgurl}" alt="${atractivo.url}">
            <p class="cardTitulo">${atractivo.nombre}</p>
            <p class="cardDescripcion">${atractivo.descripcion}</p>
            `
        atractivos.appendChild(div);
    });
}

// const generarCards = datos => {
//     datos.forEach(region => {
//         const div = document.createElement("div");
//         div.innerHTML = `
//         <div class="card" style="width: 18rem;">
//         <img src="${region.imgurl}" class="card-img-top" alt="nada">
//         <div class="card-body">
//           <h5 class="card-title">${region.nombre}</h5>
//           <p class="card-text">${region.nombre}.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//         `
//         atractivos.appendChild(div);
//     });
// }







// generarCards();
// creaAtractivos();

