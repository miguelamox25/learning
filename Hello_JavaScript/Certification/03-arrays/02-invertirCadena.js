// Este procedimiento se realiza mediante tres pasos principales
// Primero se divide la cadena en un array
let str = 'Hello'
let strChar = str.split('') // Esta cadena vacia, divide la cadena por caracteres
console.log(strChar)
// Una cadena vacía (""), que divide la cadena en caracteres individuales.
// Un espacio único (" "), que divide la cadena donde ocurren los espacios.
// Un guion ("-"), que divide la cadena en cada guion.

// Metodo reverse
// Este metodo permite invertir el array
strChar.reverse()
console.log(strChar)

// Metodo join
// Permite convertir arrays en una cadena 
let strReversa = strChar.join('') // Usamos una cadena vacia como argumento para unir los caracteres   
console.log(strReversa)

let cadena2 = 'Anita lava la tina'
let cadenaArray = cadena2.split('')

console.log(cadena2)
cadenaArray.reverse()
console.log(cadenaArray.join(''))