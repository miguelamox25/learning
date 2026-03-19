/*
En esta leccion revisaremos el tema del tipo de datos de numero y 
*/

// A continuación, tenemos un ejemplo de declaracion de variable que guardara numeros
const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number

// Los numeros completos no tiene parte fraccionaria o decimal
const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number

// Numeros flotantes
const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number

//  Javascript permite almacenar numeros que superan el limite o sin infinito
const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number

// No A Number
const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN

// Operadores aritmeticos en java

// Suma
const num1 = 10;
const num2 = 5;
const num3 = 15;

let result1 = num1 + num2;
let result2 = num2 + num1;
let result3 = num2 + num1 + num3;

console.log(result1); // 15
console.log(result2); // 15
console.log(result3); // 30

// Resta
const difference = 10 - 5;
console.log(difference); // 5

// Multiplicacion
const result4 = num1 * num2;
const result5 = num2 * num1;
const result6 = num2 * num1 * num3;

console.log(result4); // 50
console.log(result5); // 50
console.log(result6); // 750

// Division
const result7 = num1 / num2;
const result8 = num2 / num1;
const result9 = num2 / num1 / num3;
console.log(result7); // 2
console.log(result8); // 0.5
console.log(result9); // 0.03333333333333333

// Modulo
const remainder = num1 % num2;

console.log(remainder); // 1

// Exponente
const exponent = num1 ** num2;
console.log(exponent); // 8

// Combinacion de operaciones
const result = 10 + 5 * 2 - 8 / 4;
console.log(result); // 18

// Operacion de numeros como cadenas 
// Cuando usas el +, los trata como cadenas
let result10 = 5 + '10';

console.log(result10); // 510
console.log(typeof result10); // string

// Cuando usas otros simbolos
let subtractionResult = '10' - 5;
console.log(subtractionResult); // 5
console.log(typeof subtractionResult); // number

let multiplicationResult = '10' * 2;
console.log(multiplicationResult); // 20
console.log(typeof multiplicationResult); // number

let divisionResult = '20' / 2;
console.log(divisionResult); // 10
console.log(typeof divisionResult); // number

// Operacion numero y cadena
subtractionResult = 'abc' - 5;
console.log(subtractionResult); // NaN
console.log(typeof subtractionResult); // number

multiplicationResult = 'abc' * 2;
console.log(multiplicationResult); // NaN
console.log(typeof multiplicationResult); // number

divisionResult = 'abc' / 2;
console.log(divisionResult); // NaN
console.log(typeof divisionResult); // number

// Operaciones con booleanos
result1 = true + 1;
console.log(result1); // 2
console.log(typeof result1); // number

result2 = false + 1;
console.log(result2); // 1
console.log(typeof result2); // number

result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string

// Operaciones con null y NaN
result1 = null + 5;
console.log(result1); // 5
console.log(typeof result1); // number

result2 = undefined + 5;
console.log(result2); // NaN
console.log(typeof result2); // number