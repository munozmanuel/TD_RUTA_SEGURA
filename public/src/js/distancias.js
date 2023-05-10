
let select = document.getElementById("opciones01"); // Obtener el select por su ID

function Selecciona() {
  let selectedIndex = select.selectedIndex; // Obtener el índice de la opción seleccionada
  let selectedValue = select.options[selectedIndex].value; // Obtener el valor de la opción seleccionada
  //   console.log(selectedValue); // Mostrar el valor de la opción seleccionada en la consola
  let valores = selectedValue.split(",");
  let valor1 = Number(valores[0]);
  let valor2 = Number(valores[1]);
  var region = select.options[selectedIndex].innerHTML;

  return {
    valor1: valor1,
    valor2: valor2,
    region: region
  };

  //   return selectedValue;
}

let select02 = document.getElementById("opciones02");

function Selecciona2() {
  let selectOp02_index = select02.selectedIndex;
  let selectOp02_value = select02.options[selectOp02_index].value;
  let valores02 = selectOp02_value.split(",");
  let valor1 = Number(valores02[0]);
  let valor2 = Number(valores02[1]);
  var region = select02.options[selectOp02_index].innerHTML;

  //   console.log(selectOp02_value); // Muestro el valor de la opción seleccionada. log.
  return {
    valor1: valor1,
    valor2: valor2,
    region: region
  };
}

function calculo() {
  let sel01 = Selecciona();
  let op1_01 = sel01.valor1;
  let op1_02 = sel01.valor2;
  let op_region1 = sel01.region;

  let sel02 = Selecciona2();
  let op2_01 = sel02.valor1;
  let op2_02 = sel02.valor2;
  let op_region2 = sel02.region;

  console.log("el valor 1 de " + op_region1 + " es " + op1_01)
  console.log("el valor 2 de " + op_region1 + " es " + op1_02)
  console.log("el valor 1 de " + op_region2 + " es " + op2_01)
  console.log("el valor 2 de " + op_region2 + " es " + op2_02)

    return {
    s1_v1: sel01.valor1,
    s1_v2: sel01.valor2,
    s2_v1: sel02.valor1,
    s2_v2: sel02.valor2,
  }
  
};
