// EN ESTE APARTADO VEMOS EJEMPLOS DE METODOS PARA CADENAS. charCodeAt, fromCharCode,  includes, slice

//podrías usar charCodeAt() para verificar si un carácter es mayúscula, minúscula o un dígito comparando su valor ASCII.
//Por otro lado, fromCharCode() puede ser utilizado para generar dinámicamente caracteres a partir de sus códigos ASCII.

// USO DE charCodeAt
// En este ejemplo le pasamos el valor de A, y nos devuelve el numero 65. Usando charCodeAt
let letter = "A";
console.log(letter.charCodeAt(0));  // 65

// En este caso le pasamos un simbolo
let symbol = "!";
console.log(symbol.charCodeAt(0));  // 33

// USO DE fromCharCode
let char = String.fromCharCode(65);
console.log(char);  //  A

char = String.fromCharCode(97);
console.log(char);  // a

// USO DE include
// includes. Verifica si una cadena contiene una subcadena especifica
// solo devuelve true o false
char ='miguelamox20@gmail.com'
console.log(char.includes('@gmail.com')) // devuelve TRUE

char ='miguelamox20@.com'
console.log(char.includes('@gmail.com')) // devuelve FALSE

char = '@miguelAmox'
console.log(char.includes('@', 0)) // Verificamos si el caracter se encuentra en el indice 0

//  USO DE slice
// slice extrae el fragmento de una cadena, sin modificar la original
char = 'Hola buenos días'
console.log(char.slice(5, 12));  // Inicia en 5, pero excluye el ultimo (12)

// si no se le asigna un valor final, extrae el resto de la cadena
console.log(char.slice(8)) // nos días

// podemos usar numeros negativos, para extraer los ultimos caracteres
console.log(char.slice(-3)) //ías

