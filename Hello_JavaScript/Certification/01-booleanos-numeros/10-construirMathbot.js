const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

// Retorna un número de signo positivo mayor o igual a 0 y estrictamente menor que 1 [1].
const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

// La multiplicación escala la amplitud del rango y la suma desplaza el punto de inicio hacia el valor mínimo.
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

// Devuelve el valor entero más grande que no sea mayor al número dado (redondeo hacia abajo) [2, 3].
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

// Aplica el truncamiento hacia abajo a la expresión aleatoria para garantizar un resultado entero dentro del rango.
const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

// Devuelve el valor entero más pequeño que no sea menor al número proporcionado (redondeo hacia arriba) [4, 5].
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

// Retorna el entero más cercano; si la parte decimal es exactamente .5, se redondea hacia el infinito positivo [6].
const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

// Convierte cada argumento a tipo Number y devuelve el valor más grande de la lista [7, 8].
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
// Convierte los argumentos a números y devuelve el valor más pequeño de la colección [9].
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

console.log('It was fun learning about the different Math methods with you!')