// Podemos conocer el tipo de datos de una variable usando  el operador typeof

let num = 42;
console.log(typeof num); // "number"

let isUserLoggedIn = true;
console.log(typeof isUserLoggedIn); // "boolean"

let exampleVariable = null;
console.log(typeof exampleVariable); // "object"

/*
Objeto: Un objeto es una colección de pares clave-valor. 
La clave es el nombre de la propiedad y el valor es el valor de la propiedad.
Aquí, el objeto pet tiene tres propiedades o claves: name, age y type. 
Los valores son Fluffy, 3 y dog, respectivamente.
*/
let pet = {
  name: "Fluffy",
  age: 3,
  type: "dog"
};

/*
Símbolo: El tipo de dato Symbol es un valor único e inmutable que 
puede usarse como un identificador para propiedades de objetos.
En el ejemplo a continuación, se crean dos símbolos con la misma descripción, pero no son iguales.
*/
const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false

/*
La concatenación es el proceso de unir múltiples cadenas o combinar cadenas con variables que contienen texto. 
El operador + es uno de los métodos más simples y frecuentemente utilizados para concatenar cadenas.
*/
let studentName = "Asad";
let studentAge = 25;
let studentInfo = studentName + " is " + studentAge + " years old.";
console.log(studentInfo); // Asad is 25 years old.

/*Si necesitas agregar o adjuntar a una cadena existente, entonces puedes usar el operador +=. 
Esto es útil cuando deseas construir una cadena agregando más texto con el tiempo.
*/
let message = "Welcome to programming, ";
message += "Asad!";
console.log(message); // Welcome to programming, Asad!

//Otra forma de concatenar cadenas es usar el método concat(). Este método une dos o más cadenas.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // John Doe

let $noce

