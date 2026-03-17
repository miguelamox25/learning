/*
Clase 25 - Arrays
Vídeo: https://youtu.be/1glVfFxj8a4?t=8741
*/

// 1. Declaración
// En JavaScript existen dos formas principales de crear un array (o lista).

let myArray = [] // Declaración mediante sintaxis literal (Recomendada: es más directa y evita errores).
let myArray2 = new Array() // Declaración mediante el constructor integrado del lenguaje.


console.log(myArray)
console.log(myArray2)

// 2. Inicialización
// Es el proceso de asignar valores por primera vez al array.

myArray = [1] // Crea un array que contiene un único elemento: el número 3.
myArray2 = new Array(3) // ¡CUIDADO! Al usar el constructor con un solo número, no guarda el número "3", sino que reserva 3 "huecos" vacíos en la memoria.

console.log(myArray)
console.log(myArray2)

myArray = [1-4] // Inicialización literal normal con varios números.
myArray2 = new Array(1, 2, 3, 4) // El constructor sí funciona igual si le pasas más de un elemento.

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true] // Los arrays son dinámicos: pueden mezclar tipos de datos (Strings, Numbers, Booleans, etc.).
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray) 
console.log(myArray2)


// Acceso y modificación mediante índices
// Recordatorio fundamental: En programación SIEMPRE se empieza a contar desde la posición 0.

myArray2 = new Array(3) // Tenemos un array con 3 posiciones vacías.
myArray2[3] = "Brais" // Asigna "Brais" a la posición 3 (índice 2).
// myArray2 = "Moure" 
myArray2[2] = "mouredev" // Asigna "mouredev" a la posición 2 (índice 1).
myArray2[4] = "mouredev" // Si te saltas un índice (del 2 pasas al 4), el array se redimensiona solo y deja un hueco vacío en el medio.

console.log(myArray2)

myArray = [] // Reiniciamos a un array vacío.
myArray[3] = "Brais" // Al forzar asignación en el índice 2, JavaScript crea el espacio y deja los índices 0 y 1 como vacíos.
// myArray = "Moure"
myArray[2] = "mouredev"

console.log(myArray)


// 3. Métodos comunes

myArray = [] // Reiniciamos el array a vacío.

// --- push y pop ---

// PUSH: Añade uno o más elementos al FINAL del array.
myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray) // Array resultante: ["Brais", "Moure", "mouredev", 37]

// POP: Elimina el ÚLTIMO elemento del array y además te devuelve el valor eliminado.
console.log(myArray.pop()) // Elimina el 37 y lo imprime en consola.
myArray.pop() // Elimina "mouredev" sin guardarlo ni imprimirlo.

console.log(myArray) // Array resultante: ["Brais", "Moure"]


// --- shift y unshift ---

// SHIFT: Elimina el PRIMER elemento del array (el del índice 0) y lo devuelve, desplazando los demás.
console.log(myArray.shift()) // Elimina "Brais" y lo imprime.
console.log(myArray) // Array resultante: ["Moure"]

// UNSHIFT: Añade uno o más elementos al PRINCIPIO del array.
myArray.unshift("Brais", "mouredev")
console.log(myArray) // Array resultante: ["Brais", "mouredev", "Moure"]


// --- length ---

// LENGTH: Es una propiedad (no un método, por eso no lleva paréntesis) que te indica la longitud o cantidad total de elementos que tiene el array.
console.log(myArray.length) 


// --- clear (Cómo vaciar un array) ---
// JavaScript no tiene un método "clear()". Existen dos formas de hacerlo:

myArray = [] // Opción recomendada: Volver a inicializarlo con corchetes vacíos.
myArray.length = 0 // Alternativa: Forzar su propiedad de tamaño a 0. Hace lo mismo pero se considera menos elegante.
console.log(myArray)


// --- slice ---

myArray = ["Brais", "Moure", "mouredev", 37, true]

// SLICE: Crea y devuelve una "rebanada" o copia de un pedazo del array. 
// Parámetros: (índice_de_inicio, índice_de_fin). Toma en cuenta el inicio, pero EXCLUYE el fin.
// ¡Importante!: NO modifica el array original.
let myNewArray = myArray.slice(1, 3) 

console.log(myArray) // El array original sigue intacto.
console.log(myNewArray) // El nuevo array extraído: ["Moure", "mouredev"] (índices 1 y 2).


// --- splice ---

// SPLICE: MODIFICA el array original. Sirve para eliminar o sustituir elementos en posiciones específicas.
// Parámetros base: (índice_desde_donde_empezar, cantidad_de_elementos_a_borrar).
myArray.splice(1, 3) // Ve al índice 1 y, a partir de ahí, elimina 3 elementos ("Moure", "mouredev" y 37).
console.log(myArray) // Array resultante: ["Brais", true]

myArray = ["Brais", "Moure", "mouredev", 37, true] // Volvemos a los valores originales.

// SPLICE avanzado: También puede eliminar y en ese mismo hueco añadir nuevos elementos.
// Parámetros: (índice_inicio, cantidad_a_borrar, nuevo_elemento).
myArray.splice(1, 2, "Nueva entrada") // Ve al índice 1, borra 2 elementos y mete ahí el texto "Nueva entrada".
console.log(myArray) // Array resultante: ["Brais", "Nueva entrada", 37, true]