/*
Clase 29 - Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=11575
*/

// Los bucles son estructuras de control que permiten repetir un bloque de código 
// mientras una condición sea verdadera [1].

// --- 1. Bucle for (Clásico) ---
// Se usa cuando sabemos cuántas veces queremos repetir una tarea. 
// Consta de: inicialización (let i = 0), condición (i < 5) y actualización (i++) [2].
for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`) // Repite el saludo 5 veces (del índice 0 al 4) [3].
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

// Iteración sobre un Array: Usamos la propiedad .length para que el bucle 
// sea dinámico y se adapte automáticamente al tamaño de la lista [12, 13].
for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// --- 2. Bucle while ---
// Evalúa la condición ANTES de cada iteración. Si es falsa desde el inicio, 
// el código nunca se ejecuta [14].
let i = 0
while (i < 5) {
    console.log(`While ${i}`)
    i++ // ¡IMPORTANTE!: Debemos modificar la variable de control para evitar bucles infinitos [15, 16].
}

// Ejemplo de bucle infinito (comentado para evitar colgar el programa):
// while(true) { } // Esto se ejecutaría hasta agotar la memoria del sistema [16].

// --- 3. Bucle do while ---
// A diferencia del while, este asegura que el código se ejecute AL MENOS UNA VEZ, 
// ya que la condición se evalúa al final del bloque [17, 18].
i = 6
do {
    console.log(`Hola ${i}`) // Se imprimirá "Hola 6" a pesar de que 6 no es menor que 5 [18].
    i++
} while (i < 5)

// --- 4. Bucle for...of ---
// Es una forma moderna y concisa de recorrer los VALORES de objetos iterables 
// (Arrays, Sets, Maps y Strings) [19].

const myArray = [4-7]
const mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
const myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])
const myString = "¡Hola, JavaScript!"

// Itera sobre los valores de un Array
for (let value of myArray) {
    console.log(value)
}

// Itera sobre los valores únicos de un Set [20]
for (let value of mySet) {
    console.log(value)
}

// Itera sobre los pares [clave, valor] de un Map [20]
for (let value of myMap) {
    console.log(value)
}

// Itera sobre cada carácter de una cadena de texto (String) [21]
for (let value of myString) {
    console.log(value)
}

// --- 5. Sentencias de control: break y continue ---
// Permiten alterar el flujo normal de un bucle [22].

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        // CONTINUE: Salta la iteración actual y pasa directamente a la siguiente 
        // evaluación del bucle (no imprimirá el 5) [22].
        continue
    } else if (i == 7) {
        // BREAK: Detiene y sale completamente de la ejecución del bucle 
        // (no imprimirá el 7 ni los siguientes) [23].
        break
    }
    console.log(`Hola ${i}`)
}