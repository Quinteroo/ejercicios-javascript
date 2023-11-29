


// Probando For...in: 
// Usa un for...in para imprimir por consola los datos del alienígena.. 
// Puedes usar este objeto:

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}


//* cuando iteramos con for in sobre un array nos devuleve los índices
//? con for in podemos iterar sobre objetos


for (let datos in alien) {
  console.log(datos);       // muestra las llaves, no los valores
}

for (let datos in alien) {
  console.log(`${alien[datos]}`);   // muestra los valores
}