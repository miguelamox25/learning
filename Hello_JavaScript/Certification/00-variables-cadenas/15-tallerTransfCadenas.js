// --- MANIPULACIÓN Y REEMPLAZO DE TEXTO ---

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

/* .replace(valorBusca, valorNuevo)
  Busca una palabra o coincidencia y la cambia por otra.
  OJO: Por defecto, .replace() solo cambia la PRIMERA coincidencia que encuentra.
*/
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString); // "I love dogs."


const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

/* .replaceAll(valorBusca, valorNuevo)
  A diferencia de .replace(), este método busca TODAS las veces que aparece 
  la palabra y las cambia todas de golpe. Muy útil para limpieza masiva de datos.
*/
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence); // "I love dogs and dogs are so much fun!"


// --- REPETICIÓN Y PLANTILLAS (TEMPLATE LITERALS) ---

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

/* .repeat(n) 
  Repite la cadena el número de veces que le indiques (n).
  Aquí se usa .trimEnd() después de repetir para quitar el espacio sobrante 
  al final de la última repetición ("love love love ").
*/
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove); // "love love love"


/* Template Literals (Backticks ``)
  Permiten insertar variables directamente dentro de un texto usando ${variable}.
  Es mucho más limpio que usar muchos signos "+" para concatenar.
*/
const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence); // "I love love love learning."