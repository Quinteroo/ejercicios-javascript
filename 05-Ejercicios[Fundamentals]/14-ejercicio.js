

// CONTADOR DE REPETICIONES
// Crea una función que nos devuelva el número de veces que se repite
// cada una de las palabras que lo conforma. 


//? https://es.stackoverflow.com/questions/116252/contar-numeros-repetidos-en-un-array

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];




let repetidos = {};

counterWords.forEach(function (palabra) {
  repetidos[palabra] = (repetidos[palabra] || 0) + 1;                  //!
});

console.log(repetidos);

// utilizar un array asociativo, es decir, un array clave-valor 
// en el cual cada una de las claves del array haría referencia a 
// cada uno de los números diferentes de tu array.

// Después, recorrer cada uno de los números del array mediante un bucle y sumarle, 
// para cada uno de los números, el contador que tuvieran anteriormente 
// (o 0 si no había aparecido aparecido ese número todavía) más uno.




//--------------------------------------------------------------------------
//-------------------------------------------
//? PRUEBAS


for (let i = 0; i < counterWords.length; i++) {
  if (counterWords[i] === counterWords[i + 1]) {
    counter = counter + 1;
  }

}

//.forEach funciona como  for (let i = 0; i < param.length; i++)
counterWords.forEach(function (palaras) {     //todo >> agregamos una variable descriptiva del contenido del array

  console.log(`${palabras} se repite ${counter}`)
})
