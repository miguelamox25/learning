// El alcance en la programacion se refiere a la 
// visibilidad y accesibilidad de las variables en diferentes partes de tu código

// Hay tres tipos principales de alcance
// Alcance global
// alcance local
// alcance bloque


// GLOBAL
// Las variables con un alcance global, son variables accesibles desde cualquier parte del codigo
// dentro de funciones y bloques
// A continuación un ejemplo de variable global
let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"


// LOCAL
// Se refiere a variables que solo se puede acceder dentro de una funcion
function greet() {
    let message = "Hello, local scope!";
    console.log(message);
}

greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error

// BLOQUE
// Aplica en variables declaradas dentro de sentencias if, bucles for o bucles while
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // "I'm in a block"
}
// console.log(blockVar); // This will throw an error

// Las variables globales se deben usar con moderacion
// Las variables locales ayudan a mantener diferentes partes del codigo aisladas


// EJEMPLOS variable global y local
let x = 10; // Variable global

function printX() {
    let x = 20; // Variable local
    console.log(x);
}

printX(); // Imprime la variable local que esta en la funcion printX -- 20
console.log(x); // Imprime la variable global -- 10


// EJEMPLO variable de bloque
if (true) {
    let blockVar = "Hello";
}
console.log(blockVar);