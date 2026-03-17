/*
Array (Lista): 
Es ideal cuando necesitas guardar una lista de elementos que mantienen un orden específico y pueden estar repetidos.
Ejemplo: Una lista de las frutas que hay en una canasta (["manzana", "pera", "manzana"]).
*/

let myArray = [] // Declaracion de un array
myArray = ['Miguel','Amox','miguel@hotmail.com',29,true] // Asignacion de valores a myArray
console.log(myArray) // Salida

// Acceso  y Modificacion del array
console.log(myArray[3]) // Acceso
myArray[1] = 'Jacome' // Modificacion (se cambio el apellido a Jacome)
console.log(myArray)

// Push y Pop
myArray.push('2328374859')// Agrega un valor al inicio (empuja)
console.log(myArray)

console.log(myArray.pop())// Elimina el ultimo valor, y lo devuelve (pop - reventar)

// Shift y Unshift
console.log(myArray.shift())// Shift - Elimina el primer elemento del vector y lo devuelve
myArray.unshift('AOMJ961118','Miguel') // Unshift - Agrega valores al inicio del vector
console.log(myArray)

// length
console.log(`Este vector tiene ${myArray.length} posiciones`) // Devuelve el numero de posiciones que tiene el vector

// Slice y splice
console.log(myArray.slice(1,3)) // Slice devuelve un rebanada del array, (inicio, fin) la posicion final la excluye

let myArray2 = []
myArray2 = myArray
console.log(myArray2)

myArray2.splice(1,3) // Splice accede al indice y elimina el numero de elementos indicados en el segundo numero (3)
console.log(myArray2)
myArray2.splice(0,2,'Nuevo elemento')// En la tercer posicion se puede indicar el nuevo valor a signar
console.log(myArray2)

// Vaciando vector
myArray2 = []
console.log('====================================================')
/*
Set (Conjunto): 
Es perfecto cuando necesitas un listado de elementos, pero quieres asegurarte de que no haya ningún valor duplicado. 
Si intentas meter un dato repetido, el Set simplemente lo ignora.
Ejemplo: Una lista de correos electrónicos de suscriptores, donde no quieres enviarle dos veces el mismo correo a la misma persona.
*/

let mySet = new Set(['Miguel','Ángel','Teli']) // Declaracion de un Set
console.log(mySet)

// En un set no existen indices, por lo tanto no se puede acceder a un valor por su posición, si no por existencia
// ADD
mySet.add('Bonifacio') // Agrega un nuevo elemento
mySet.add('Miguel') // Ignora duplicados, pero es sensible a mayusculas
console.log(mySet)

// DELETE
mySet.delete('Bonifacio') // Al eliminar se debe indicar el valor, y devolvera true si fue exitoso
console.log(mySet)

// HAS
console.log(mySet.has('Miguel')) // Comprueba si existe un valor en el set y retorna TRUE

// SIZE
console.log(`Este set contiene ${mySet.size} elementos`) // Devuelve el numero de elementos del set 

/*
Map (Mapa o Diccionario): 
Se utiliza cuando necesitas guardar datos que están relacionados entre sí mediante un formato de clave y valor. 
Las claves actúan como identificadores únicos para poder buscar y modificar rápidamente los datos asociados.
Ejemplo: Los datos de perfil de un usuario, donde la clave es "nombre" y el valor es "Brais", y la clave "edad" tiene el valor "37"
*/

let  miMapa = new Map ( [ ['Nombre','Miguel'] , ['Apellido','Amox'] ] ) // Declaracion y asignacion de un Map
console.log(miMapa)

// SET (crear / actualizar)
miMapa.set('Edad',29) // Cuando no existe la llave crea una nueva entrada
miMapa.set('Nombre','Ángel') // Cuando encuntra una llave, solo actualiza el valor
console.log(miMapa)

// GET (obtener)
console.log(miMapa.get('Apellido'))

// HAS (hay?)
console.log(miMapa.has('Edad'))
console.log(miMapa.has('correo'))

// DELETE
miMapa.delete('Edad')
console.log(miMapa)

// SIZE
console.log(`Este mapa tiene ${miMapa.size} elementos`)

//CLEAR
//miMapa.clear()
console.log(miMapa)

// KEYS
console.log(miMapa.keys()) // Devuelve las llaves registradas

// VALUES
console.log(miMapa.values()) // Devuelve los valores 

// ENTRIES
console.log(miMapa.entries())