/*
En JavaScript, las cadenas se tratan como secuencias de caracteres y 
cada carácter en una cadena se puede acceder usando notación de corchetes. 
Esto te permite recuperar un carácter específico de una cadena basado en su posición, 
que se llama su índice.
*/

let greeting1 = "hello";
console.log(greeting1[1]); // "e"

let greeting2 = "hello";
// "o" la longitud de hello es 5, y el último carácter (o) está en el índice 4 que es 5 - 1.
console.log(greeting2[greeting2.length - 1]); 

// Para obtener multiples caracteres
let greeting = "hello";
let firstTwo = greeting[0] + greeting[1]; // "he"
console.log(firstTwo);

// Secuencia de escape para saltos de linea
let poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

// Escape de comillas
let statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"

let quote = 'It\'s a beautiful day!';
console.log(quote); // It's a beautiful day!

// Ejemplo de literales de plantilla
const name = "Alice";
const greeting3 = `Hello, ${name}!`;

console.log(greeting3);

// usando ` ` podriamos mantener saltos de linea
let poem1 = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem1);

// los literales de plantilla tambien muestran caracteres especiales
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 

// El método indexOf() en JavaScript te permite buscar una subcadena dentro de una cadena.
let sentence1 = "JavaScript is awesome!";
let position1 = sentence1.indexOf("awesome!");
console.log(position1); // 14

// Cuando no se encuentra devuelve -1
let sentence2 = "JavaScript is awesome!";
let position2 = sentence2.indexOf("fantastic");
console.log(position2); // -1

// Tambien se puede especificar desde donde iniciar
let sentence3 = "JavaScript is awesome, and JavaScript is powerful!"; // Omite el primer javaScript
let position3 = sentence3.indexOf("JavaScript", 10);
console.log(position3); // 27

