// Ejemplo de uso de booleanos
let isOldEnoughToDrive = true;

console.log(isOldEnoughToDrive); // true

// Se puede usar dentro de una condicion así
if (isOldEnoughToDrive) {
 console.log("You're old enough to drive"); // You're old enough to drive
} else {
 console.log("Sorry, you are not old enough to drive");
}

// OPERADORES DE COMPARACION

// Tenemos el operador de igualdad, que se emplea asi "=="
// Este verifica si conciden los numeros o el contenido
console.log(5 == "5"); // true

// Tenemos tambien el operador de igualdad  estricta "==="
// Este verifica tambien si coinciden los tipos de datos
console.log(5 === '5'); // false

// Asi tambien tenemos operadores de desigualdad y desigualdad estricta
// Aqui muesta FALSE, poorque el contenido NO es diferente
console.log(5 != "5"); // false

// Aqui muestra TRUE porque evalua tambien el tipo de dato, el cual es diferente
console.log(5 !== "5"); // true

// Esto sucede porque al emplear 5 == '5', se hace una coerción de tipo, es decir, se forza
// Pero cuando usamos la igualdad estricta "===", la coerción no se ejecuta

// OPERADORES DE COMPARACION

// Mayor que >
// Verifica si un valor es mayor a otro
let a = 6;
let b = 9;
console.log(a > b); // false
console.log(b > a); // true

// Mayor o igual >=
let c = 6;
console.log(a >= b); // false
console.log(b >= a); // true
console.log(a >= c); // true

// Menor que <
console.log(a < b); // true
console.log(b < a); // false

// Menor o igual <=
console.log(a <= b); // true
console.log(b <= a); // false
console.log(a <= c); // true
