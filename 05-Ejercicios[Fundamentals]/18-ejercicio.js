

// Probando For: 
// Usa un bucle for para recorrer todos los destinos del array 
// y elimina los elementos que tengan el id 11 y 40. Imprime en 
// un console log el array. 

// Puedes usar este array:

const placesToTravel = [{ id: 5, name: 'Japan' }, { id: 11, name: 'Venecia' }, { id: 23, name: 'Murcia' }, { id: 40, name: 'Santander' }, { id: 44, name: 'Filipinas' }, { id: 59, name: 'Madagascar' }]


//? SOLUCIÓN

function checkPlace(param) {
  for (let i = 0; i < param.length; i++) {
    if (param[i].id === 11 || param[i].id === 40) {
      param.splice(param[i], 1);
    }
  }
  console.log(param);
}





//? PRUBEAS

for (let places of placesToTravel) {
  if (places.id !== 11 || places.id !== 40) {             //! Esto   if (places.id !== 11 || 40) { está mal expresado
    console.log(places)
  }
}


for (let places of placesToTravel) {
  if (places.id !== 11 || 40) {
    console.log(places)
  }
}


for (let place of placesToTravel) {
  if (place.id === 11) {
    placesToTravel.splice(place, 1);
  } else if (place.id === 40) {
    placesToTravel.splice(place, 1);
  }

  console.log(placesToTravel);
}



const checkPlaces = placesToTravel.some(place => place.id !== 11)
console.log(checkPlaces) // -> true


