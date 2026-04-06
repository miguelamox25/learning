// Arrays
// colección ordenada de valores, cada uno identificado por un índice numérico
// Los arrays pueden contener datos de diferentes tipos

let frutas = ['Manzana','Platano','Uvas']

// Se puede acceder a cada elemento usando su indice
console.log(frutas[2])
console.log(frutas[1])
console.log(frutas[0])
console.log(frutas.length) // Devuelve la cantidad de elementos que tiene el array
console.log(frutas[3]) // Cuando el valor no existe en el indice devuelve UNDEFINED

// Puedes actualizar valores
frutas[1] = 'Fresa'
console.log(frutas)

// Se pueden agregar elementos nuevos a un array
frutas[3] = 'Durazno'
console.log(`Se a agregado ${frutas[3]}`)
// Pero si usas un indice mucho mayor al limite existente se crearan comportamientos extraños



// Metodo Push
// Añade uno o mas elementos al final de una array
frutas.push('Mango')
console.log(frutas)

// Comportamiento de const en un array
const numeross = [20,30,50] // El array es declarado como constante
numeross.push(34,44) // Y se le pueden agregar nuevos valores
/// numeross = [45,5,7] // Sin embargo, no se pueden cambiar los que ya tiene 
console.log(numeross)



// Metodo POP
// Este metodo, elimina el ultimo valor y lo devuelve
console.log('Se ha eliminado el elemento: '+frutas.pop())
console.log(frutas)



// Metodo unshift()
// Este metodo agrega uno o mas elementos al inicio del array y devuelve su nueva longitud
frutas.unshift('Naranja') // Agrega un nuevo elemento, y devuelve la logitud
console.log(frutas)



// Metodo shift
// Elimina el primer elemento de un array y lo devuelve
console.log(frutas.shift())
console.log(frutas)



// Arreglos BIDIMENSIONALES
let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];

console.log(chessboard[0][3]); // "Q"



// DESESTRUCTURACION DE ARRAYS
let colores = ['azul','violeta','marron','rojo']
// En la siguiente linea, asignamos a cada variable el elemneto correspondiente
// Se pueden omitir valores, usando comas
// En este ejemplo omitimos el tercero
let [primero, segundo, ,cuarto] = colores

console.log(cuarto)


let numbers = [1, 2];
let [a, b, c = 3] = numbers; // Tambien proporcionaremos valores por defecto en caso de que no exista uno

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

frutas.push('Melon', 'Sandia', 'Limon')
console.log(frutas)

// ...rest
// Esta sintaxis permite que los elementos que no han sido recolectados en un array sean almacenados en un array nuevo
let [uno, dos, ...rest] = frutas
console.log(uno)
console.log(rest)
