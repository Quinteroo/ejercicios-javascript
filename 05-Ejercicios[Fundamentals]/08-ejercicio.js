

// Buscar la palabra más larga 
// Completa la función que tomando un array de strings como 
// argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:


//? https://es.stackoverflow.com/questions/369748/encontrar-la-palabra-m%C3%A1s-larga-de-un-array-con-javascript


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {                    //* encuentrame la palabra más larga de esta colección 'avengers'
  let longestWord = param[0];                        //* asignamos la primera palabra como la más larga

  for (let i = 1; i < param.length; i++) {           //* con i recorre la colección, empieza por la siguiente para no compararla consigo mism

    if (param[i].length > longestWord.length) {      //* si la palabra que estamos comparando, es más larga que la primera
      longestWord = param[i];                        //* esta pasa a ser ahora la palabra más larga.
    }
  }

  return longestWord;                                //* como no hemos especificado la más larga, esta devuelve la primera.
}

