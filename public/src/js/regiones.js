
document.getElementById('opciones02').addEventListener('change', function (e) {

    let dataValue = e.target.selectedOptions[0].getAttribute('dataValue');
    const divAtractivos = document.getElementById('atractivos');
    creaAtractivos(dataValue);   
})

const creaAtractivos = async (dataValue) => {
    try {
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