

// Probando For...of: 
// Usa un bucle forof para recorrer todos los destinos del array. 
// Imprime en un console.log sus valores.

// Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']


//* es una versión simplificada del bucle of
//? con for ..of podemos iterar obre un array

for (let place of placesToTravel) {            // es como si estuvieramos dándoles un alias con 'place' y for ..of va a ir iterando
  console.log(place);                           // sobre el array original y va a ir asignado dicha variable a cada uno
}                                               // let = japon   >> let = venecia >> let = murcia .....