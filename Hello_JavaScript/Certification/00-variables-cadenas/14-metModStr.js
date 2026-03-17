/*
Metodos de modificación de cadenas
    remplace() // reemplaza
    repeat() // repite
*/

// remplace() Encuentra un valor en una cadena y lo reemplaza por otro
// string.replace(searchValue, newValue); //    Ejemplo
let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"

// replace solo reemplazará la primer coincidencia
// replaceAll, permite cambiar todas las coincidencias existentes
let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);  // "Hello, universe! Welcome to the world of coding."

// repeat() Te permite repetir una cadena un numero definido de veces
// string.repeat(count); // ejemplo
let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"

// Exceptions:
// * No usar numeros negativos
// console.log(word.repeat(-1));  // Throws RangeError: Invalid count value
// * Debe ser un numero finito
// console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value
// * Si el conteo es numero flotante, se redondea para abajo 
console.log(word.repeat(2.5));  // "Hello!Hello!"
// * Si pasas 0 como el conteo, el método repeat() devolverá una cadena vacía.
console.log(word.repeat(0));  // ""


// Complemento:
// Podemos pasar variables
let count = 4;
console.log(word.repeat(count)) // "Hello!Hello!Hello!"