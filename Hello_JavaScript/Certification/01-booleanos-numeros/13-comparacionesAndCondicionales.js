// Undefined
// null

// Una variable es undefined cuando ha sido declarada pero no ha sido asignada un valor
// El tipo null, por otro lado, es un valor de asignación que representa una no-valía deliberada.

// null y undefined se consideran iguales
// Ya que al compararlos se hace una coercion de tipos
console.log(null == undefined); // true

// Sim embargo al emplear la comparacion estricta, devuelve false
console.log(null === undefined); // false

// Al comparar null o undefined con otros valores usando el operador de igualdad (==), 
// el comportamiento puede ser inesperado.
// en estos ejemplos, obtenemos false, porque null y undefined solo son iguales entre sí 
console.log(null == 0);  // false
console.log(null == ''); // false
console.log(undefined == 0); // false
console.log(undefined == ''); // false

// 1. Comparación relacional: El operador ">" fuerza la conversión de null a número.
// Según las reglas de ToNumber, null se convierte en 0 [1].
// La expresión se evalúa como 0 > 0, lo cual es falso [13.10.1].
console.log(null > 0);  // false

// 2. Comparación de igualdad: El operador "==" tiene reglas únicas para null.
// En una igualdad débil, null SOLO es igual a sí mismo o a undefined [2, 3].
// A diferencia de los operadores relacionales, aquí NO se convierte null a 0 [13.11].
console.log(null == 0); // false

// 3. Comparación relacional: El operador ">=" también fuerza la conversión a número.
// null se convierte de nuevo en 0 [1].
// El motor evalúa si 0 es "mayor o igual" a 0, resultando en verdadero [13.10.1, 774].
console.log(null >= 0); // true

console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
console.log(undefined == 0); // false

// se recomienda usar el operador de igualdad estricta al comparar valores, especialmente al tratar con null y undefined