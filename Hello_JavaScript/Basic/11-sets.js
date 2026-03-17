/*
Clase 26 - Sets 
Vídeo: https://youtu.be/1glVfFxj8a4?t=9952
*/

// Set

// 1. Declaración
// Para crear un Set vacío, es obligatorio usar la palabra reservada `new Set()`.
let mySet = new Set()

console.log(mySet)

// 2. Inicialización
// Para inicializar un Set con datos, le debemos pasar un elemento iterable, 
// típicamente un array (usando los corchetes [] dentro de los paréntesis).
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)


// 3. Métodos comunes

// --- add y delete ---

// ADD: Añade un elemento al final del Set.
mySet.add("https://moure.dev")

console.log(mySet)

// DELETE: Elimina un elemento. Al no tener índices como los arrays, 
// se le debe pasar exactamente el valor del elemento que queremos borrar.
mySet.delete("https://moure.dev")

console.log(mySet)

// El método delete() también retorna un valor booleano para avisarnos si tuvo éxito:
console.log(mySet.delete("Brais")) // Imprime `true` porque encontró "Brais" y lo borró.
console.log(mySet.delete(4))       // Imprime `false` porque el número 4 no existe en el Set.

console.log(mySet)


// --- has ---

// HAS: Comprueba rápidamente si un elemento específico existe dentro del Set.
// Retorna true o false.
console.log(mySet.has("Moure")) // Retornará true
console.log(mySet.has("Brais")) // Retornará false (lo acabamos de borrar arriba)


// --- size ---

// SIZE: Es una propiedad (no lleva paréntesis) que devuelve el tamaño 
// o cantidad total de elementos guardados en el Set (equivalente al length de los arrays).
console.log(mySet.size)


// 4. Conversión entre estructuras

// Convertir un Set a Array
// Usando `Array.from()` podemos transformar nuestro Set en un listado normal de array.
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un Array a Set
// Simplemente pasamos el array por parámetro al instanciar el Set.
mySet = new Set(myArray)
console.log(mySet)


// 5. La característica principal: No admite duplicados

// Si intentamos añadir el mismo elemento varias veces, el Set lo ignora y NO lo duplica.
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")

// Sin embargo, sí admite este último porque es sensible a mayúsculas y minúsculas 
// (Fíjate en la 'B' y la 'M' mayúsculas, para el lenguaje esto ya es un valor distinto).
mySet.add("BraisMoure@mouredev.com")

console.log(mySet)