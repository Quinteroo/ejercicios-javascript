

// VALORES ÚNICOS
// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.

// Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)


//? https://matiashernandez.dev/blog/post/4-formas-de-eliminar-elementos-duplicados-en-un-arreglo-con-javascript

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];



let result = duplicates.filter((item, index) => {  //* Array.filter retorna un nuevo arreglo con los elementos que cumplan la condición
  return duplicates.indexOf(item) === index;       //* Array.indexOf retorna el primer indice del arreglo en donde se encuentre un elemento dado.
})
console.log(result);

// Array.filter es un método inmutable que retorna un nuevo arreglo
// con los elementos que cumplan la condición implementada por la
// función utilizada como argumento.


// De forma interna, filter itera sobre los elementos del arreglo y
// aplica la función argumento en cada item retornando un valor _boolean,
// si el elemento pasa la condición se retorna true indicando que este será agregado al nuevo arreglo.

// Para este caso de remover elementos duplicados utilizamos como método auxiliar la
// función Array.indexOf. Este método retorna Array.indexOf retorna el primer indice del
// arreglo en donde se encuentre un elemento dado.


// En este caso, podemos identificar un duplicado cuando el indice no es igual al resultado de indexOf.
// data.indexOf(item) === index ,retornará siempre la primera ocurrencia del item.     //? https://www.youtube.com/watch?v=g-z4I-79hFo
//* está comparando los índices,es decir,
//* pizza es [1], y retorna ese
//* .filter itera el array y cuando llega a la segunda pizza
//* esta es pizza[6] y al no coincidir con el primer índice, no lo retorna




//? PRUBEAS

const duplicates1 = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(param) {

  let
}