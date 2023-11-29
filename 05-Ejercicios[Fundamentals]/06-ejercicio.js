

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

let i = 9;

for (i = 0; i < 10; i++) {    //! cuidado, dentro del for son puntoycoma ( ; )
  console.log(i)              //? la condición tiene que ser +1 al valor de la variable para que se muestre todo el recorrido
}



// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0. //? es decir, que sean pares

for (i = 0; i < 10; i++) {
  if (i % 2 == 0) {        //*puede funcionar sin corchetes {} pero mejor acostumbranos a ponerlo
    console.log(i)
  }

}


// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.


for (i = 0; i < 11; i++) {                 //!
  if (i < 10) {                                  //? no hace falta poner i += 1; por que ya tiene i++
    console.log('Intentando dormir 🐑')
  } else {                                       //? no hay que poner ninguna condición más tipo } else ( i == 10 ) { 
    console.log('Dormido!')                      //? ya que 'else' es en el caso en el que la 
  }                                              //? condición de for NO se cumpla

}

