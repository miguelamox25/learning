// TALLER FORMATEO DE CADENAS
// Definimos una cadena con espacios intencionales al inicio y al final
const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput); // Muestra la cadena tal cual, con sus espacios

// .trim() elimina los espacios en blanco de AMBOS extremos de la cadena
const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput); // "Hello World!"

// .trimStart() elimina espacios ÚNICAMENTE al principio (izquierda)
const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart); // "Hello World!   "

// .trimEnd() elimina espacios ÚNICAMENTE al final (derecha)
const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd); // "   Hello World!"

// .toUpperCase() transforma todos los caracteres de la cadena a MAYÚSCULAS
const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput); // "HELLO WORLD!"

// .toLowerCase() transforma todos los caracteres de la cadena a minúsculas
const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput); // "hello world!"

// EJERCICIO DE MANIPULACIÓN ESPECÍFICA (Camel Case manual)
const lowercaseWord = "camelcase";

/* Aquí construimos la palabra por partes usando el operador + (concatenación):
  1. lowercaseWord.slice(0, 5): Corta desde el índice 0 hasta antes del 5 ("camel").
  2. lowercaseWord[5].toUpperCase(): Toma la letra en la posición 5 ("c") y la hace "C".
  3. lowercaseWord.slice(-3): Usa un índice negativo para contar desde el final, 
     obteniendo las últimas 3 letras ("ase").
*/
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);

console.log("Camel cased version:");
console.log(camelCasedVersion); // "camelCase"