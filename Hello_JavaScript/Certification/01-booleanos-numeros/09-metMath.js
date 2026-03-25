// OBJETO MATH
// Este objeto incluye metodos que pueden realizar operaciones matematicas avanzadas
// Actúa exclusivamente como un contenedor para utilidades matemáticas estáticas
// No es un constructor, por lo tanto no se puede usar el operador new
// No es una funcion, no puede ser invocado como una funcion directamente

// Math.random()
// genera un número flotante aleatorio entre 0 (incluido) y 1 (excluido)
let randomNum = Math.random();
console.log(randomNum); // any number between 0 and 1 – 0 inclusive and 1 exclusives

// Math.min() y Math.max()
// Math.min() y Math.max() toman un conjunto de números y devuelven el valor mínimo y máximo, respectivamente.
const smallest = Math.min(1, 5, 3, 9);
console.log(smallest); // 1

const largest = Math.max(1, 5, 3, 9);
console.log(largest); // 9

// Math.floor y Math.ceil
// Si quieres redondear números hacia arriba o hacia abajo al entero más cercano, 
// puedes usar los métodos Math.ceil() y Math.floor().
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.7)); // 4

// Math.round
// Redondea un número a su entero más cercano, tomando en cuenta el punto decimal:
console.log(Math.round(2.3)); // 2
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.8)); // 5

// Uso práctico de Math.floor() y Math.random() para generar un número aleatorio entre dos números enteros.
const max = 10;
const min = 5;
randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

// Generar un numero entre 20 y 1
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);

// Math.trunc(). 
// Math.trunc() elimina la parte decimal de un número, devolviendo solo la porción entera, sin redondear:

console.log(Math.trunc(2.9)); // 2
console.log(Math.trunc(9.1)); // 9

// Math.sqrt() y Math.cbrt()
// Si necesitas obtener la raíz cuadrada o cúbica de un número, puedes usar estos métodos 
console.log(Math.sqrt(81)); // 9
console.log(Math.cbrt(27)); // 3

// Math.abs()
// Si necesitas obtener el valor absoluto de un número
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5)); // 5

// Math.pow()
// Toma dos números y eleva el primero a la potencia del segundo
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(8, 2)); // 64