/*
    En este archivo trataremos sobre los metodos de formateo de cadenas, 
    es decir, como podemos modificar el formato de una cadena para que se vea de una forma diferente a la original.

    vamos a explicar trim(), trimStart(), trimEnd()
*/
let str = "   Hola mundo   ";

// Como podemos ver tenemos espacios en nuestra cadena, tanto al principio como al final
console.log(str); // "   Hola mundo   "

// USO DE trim
// trim elimina los espacios en blanco al inicio y al final de una cadena
console.log(str.trim()); // "Hola mundo"

// USO DE trimStart
// trimStart elimina espacios  vacios al inicio de la cadena
console.log(str.trimStart())

// USO DE trimEnd
// trimEnd elimina espacios vacios al final de la cadena
console.log(str.trimEnd())