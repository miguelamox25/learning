// NaN
// parseFloat
// parseInt
//toFixed

// NaN: Not a Number
// Es un valor especial que representa un resultado numérico no representable o indefinido.
let result = 0 / 0;
console.log(result); // NaN

// Una propiedad peculiar de NaN es que no es igual a nada, incluyendo a sí mismo:
console.log(NaN === NaN); // false
// Este comportamiento dificulta verificar si un valor es NaN

// La propiedad isNaN
// Así es como se comporta isNaN():
// Fuerza la conversión del valor a número. 
// Por ejemplo, isNaN("hola") devuelve true porque la cadena "hola" no se puede convertir en un número válido [19.2.3, 496].
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(isNaN("37"));      // false: "37" is converted to 37
console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
console.log(isNaN(""));        // false: empty string is converted to 0
console.log(isNaN(" "));       // false: string with a space is converted to 0

console.log(isNaN("blabla"));  // true: "blabla" is not a number

// Number.isNaN()
// Sólo devuelve true si el valor es exactamente NaN
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN("blabla"));   // false

// cuando se trabaja con operaciones numéricas o entradas de usuario que deberían ser números, 
// a menudo es necesario verificar NaN para manejar errores o 
// entradas inesperadas de manera adecuada. Por ejemplo:
let a = 0;
let b = 0;
result = a / b;

if (Number.isNaN(result)) {
  result = "Error: Division resulted in NaN";
}

console.log(result); // "Error: Division resulted in NaN"



// parseFloat()
// Analiza un argumento de cadena y devuelve un número de punto flotante.
// Está diseñado para extraer un número del comienzo de una cadena, 
// incluso si la cadena contiene caracteres no numéricos más adelante. 
console.log(parseFloat("3.14"));     // 3.14
console.log(parseFloat("3.14 abc")); // 3.14
console.log(parseFloat("3.14.5"));   // 3.14
console.log(parseFloat("abc 3.14")); // NaN

// parseInt()
// analiza un argumento de cadena y devuelve un entero
// comienza desde el principio de la cadena, pero se detiene en el primer carácter que no es un dígito
console.log(parseInt("42"));       // 42
console.log(parseInt("42px"));     // 42
console.log(parseInt("3.14"));     // 3
console.log(parseInt("abc123"));   // NaN

// parseInt y parseFloat, ignoran espacios vacios al inicio, e incluyen signos de + o -
console.log(parseFloat("  3.14"));  // 3.14
console.log(parseInt("  42"));      // 42
console.log(parseFloat("+3.14"));  // 3.14
console.log(parseInt("-42"));      // -42

// toFixed
// se llama en un número y toma un argumento opcional, 
// que es el número de dígitos que aparecerán después del punto decimal. 
// Devuelve una representación en cadena del número con el número especificado de decimales.
let num = 3.14159;
console.log(num.toFixed(2)); // "3.14"
// Fixed, devuelve una cadena, no un numero
// Fixed redondea el numero al valor mas cercano que se pueda presentar
console.log((3.14159).toFixed(3));  // "3.142"
console.log((3.14449).toFixed(3));  // "3.144"
console.log((3.14550).toFixed(3));  // "3.146"

// Si llamas a .toFixed() sin argumentos, por defecto tiene 0 decimales
num = 3.14159;
console.log(num.toFixed()); // "3"

// útil al trabajar con cálculos financieros o mostrar precios
let price = 19.99;
let taxRate = 0.08;
let total = price + (price * taxRate);

console.log("Total: $" + total.toFixed(2)); // "Total: $21.59"

// Recuerda que el metodo, va a redondear el numero por ejemplo 
// (80.236).toFixed(2) devuelve 80.24