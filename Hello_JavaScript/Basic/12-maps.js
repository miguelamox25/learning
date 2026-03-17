/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// 1. Declaración
// Para instanciar un mapa vacío, se utiliza obligatoriamente la palabra reservada `new Map()`.
let myMap = new Map()

console.log(myMap)

// 2. Inicialización
// Para inicializarlo con datos, le pasamos un array que contiene sub-arrays. 
// Cada sub-array representa un par de [clave, valor].
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap) // Imprime el mapa con sus 3 elementos asociados.


// 3. Métodos y propiedades

// --- set ---

// SET: Añade un nuevo par al mapa porque la clave "alias" no existía previamente.
myMap.set("alias", "mouredev")

// SET (Actualización): Como los mapas no admiten claves duplicadas, al usar una clave 
// que ya existe ("name"), no crea un registro nuevo, sino que actualiza su valor a "Brais Moure".
myMap.set("name", "Brais Moure")

console.log(myMap)


// --- get ---

// GET: Recupera y devuelve el valor asociado a la clave "name" ("Brais Moure").
console.log(myMap.get("name"))

// Si intentamos recuperar una clave que no existe ("surname"), devuelve `undefined`.
console.log(myMap.get("surname"))


// --- has ---

// HAS: Comprueba si la clave existe y devuelve un booleano. 
console.log(myMap.has("surname")) // Devuelve false porque no existe.
console.log(myMap.has("age"))     // Devuelve true porque sí existe.


// --- delete ---

// DELETE: Elimina por completo el par asociado a la clave que le pasemos.
myMap.delete("email")

console.log(myMap) // El mapa ya no contiene el email.


// --- keys, values y entries ---

// Estos métodos devuelven listados (iteradores) para extraer partes del mapa:
console.log(myMap.keys())    // Retorna un listado únicamente con las claves ("name", "age", "alias").
console.log(myMap.values())  // Retorna un listado únicamente con los valores ("Brais Moure", 37, "mouredev").
console.log(myMap.entries()) // Retorna un listado con todos los pares de [clave, valor].


// --- size ---

// SIZE: Es una propiedad (no un método, por eso no lleva paréntesis) que devuelve 
// la cantidad total de elementos (pares) en el mapa.
console.log(myMap.size)


// --- clear ---

// CLEAR: Vacía o borra por completo todos los elementos del mapa de una sola vez.
myMap.clear()

console.log(myMap) // Imprime un mapa con 0 elementos.