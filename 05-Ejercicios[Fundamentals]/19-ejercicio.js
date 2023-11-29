


// Mixed For e includes: 
// Usa un bucle for para recorrer todos los juguetes 
// y elimina los que incluyan la palabra gato. 
// Recuerda que puedes usar la función .includes() para comprobarlo. 

// Puedes usar este array:

//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]


//? SOLUCIÓN
for (let i = 0; i < toys.length; i++) {
  if (toys[i].name.includes('gato')) {
    toys.splice(i, 1), i--
  }
}
console.log(toys)




//? PRUEBAS
function selectToy(param) {
  for (let i = 0; i < param.length; i++) {
    if (param[i].name.includes('gato')) {
      delete param[i];
    }
  }
  console.log(param);                   //! --> (5) [{…}, {…}, {…}, empty × 2]   ???
}


