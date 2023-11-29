

// Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
// Implementa la función denominada sumAll que toma un array de números como argumento
// y devuelve la suma de todos los números de la matriz.
// Puedes usar este array para probar tu función:

//?https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce


const numbers = [1, 2, 3, 5, 45, 37, 58];


//? SOLUCIÓN 1 .reduce
// es una función para "reducir" el array
// va sumando desde la posición inical (en este caso 0) con la que le precede

let total = numbers.reduce((a, b) => a + b, 0);

console.log(total);

// const numbers = [1, 2, 3, 5, 45, 37, 58];
// const numbers = [3, 3, 5, 45, 37, 58];
// const numbers = [6, 5, 45, 37, 58];
// const numbers = [11, 45, 37, 58];
//  y así hasta llegar a 151



//? EXPLICACIÓN
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10




//? SOLUCIÓN 2 for
function sumAll(param) {

  let total1 = 0;

  for (let i = 0; i < param.length; i++) {
    total1 = total1 + i;  //! no podemos sumar i (index, tenemos que meterlo en una varianle)
  }

  return total1

}


function sumAll(param) {

  let total1 = 0;

  for (let i = 0; i < param.length; i++) {
    let num = param[i];       // damos a la variable el valor de cada posición
    total1 += num;            // con cada vuelta sumamos al total cada valor
  }

  return total1;

}



