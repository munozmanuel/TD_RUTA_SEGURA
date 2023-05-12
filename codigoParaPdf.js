const PDF = require('pdfkit');
const fs = require('fs');




var doc = new PDF();
doc.pipe(fs.createWriteStream(__dirname + '/public/generado.pdf' ));
doc.text('HOLA MUNDO PDFKIT', {
    align: 'center'
})
var parrafo = 't dolore magnam aliquam quaerat voluptatem'
doc.text(parrafo, {
    columns: 3
})
doc.end()

console.log('ARCHIVO CREADO');