
// OPERADORES ARITMETICOS

// El comportamiento de los operadores al resover
// Primero hace multiplicaciones y divisiones
// Posteriormente sumas y restas

// En caso de tener una operacion de la misma jerarquia, sigue la regla de asociatividad para determinar el orden

// Izquierda a derecha; en el caso de operaciones como suma o multiplicacion
let result = 10 - 2 + 3;

console.log(result); // 11

// Derecha a izquierda; algunos casos como asignacion y exponente
// Asignacion
let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10

// Exponente
result = 2 ** 3 ** 2;

console.log(result); // 512




// OPERADORES DE INCREMENTO Y DECREMENTO

// ++x incrementa el valor de la variable primero, luego devuelve un nuevo valor
let x = 5;

console.log(++x); // 6
console.log(x); // 6

// x++ devuelve primero el valor actual de la variable, luego lo incrementa
let y = 5;

console.log(y++); // 5
console.log(y); // 6

// si estás usando el valor inmediatamente en una expresión, la diferencia se vuelve importante
a = 5;
b = ++a;
console.log(b); // 6 (a was incremented before assignment)

let c = 5;
let d = c++;
console.log(d); // 5 (c was incremented after assignment)



// OPERADORES DE ASIGNACION
let num = 5;
// num = num + 2; En lugar de escribir la operacion así. Usarla de la siguiente manera
num += 2;

console.log(num); // 7

// Otro ejemplo, de operador de asignaccion de multiplicacion
let points = 5;
points *= 3;

console.log(points); // 15

// Asi mismo, tenemos operador de asignacion para residuoy exponente

