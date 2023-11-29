


// Calcular promedio de strings: 
// Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
// y de lo contrario cuente la longitud del string y lo sume. 

// Puedes usar este array para probar tu función:

// pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(param) {

  let total = 0;

  for (i = 0; i < param.length; i++) {
    if (typeof param[i] === 'number') {    //! el valor que te devuelve typeof está metido entre comillas '...'
      let num = param[i];                  //? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
      total = total + num;

    } else {
      let num2 = param[i].length;
      total = total + num2;
    }

  }

  let promedio = total / param.length;

  return promedio;

}