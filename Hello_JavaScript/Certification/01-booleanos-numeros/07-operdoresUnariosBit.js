// OPERADORES UNARIOS
// Estos actuan sobre un solo operador para realizar cambios de tipo, manipulacion de datos, etc, dependiendo del operador.

// OPERADOR MAS UNARIO
// Convierte su operando en numero 
// Si el operando ya es numero se queda sin cambios
let str = '42'
let strToNumb = +str
console.log(str) // 42
console.log(typeof(str)) // Strig
console.log(typeof(strToNumb)) // Number



// OPERADOR MENOS UNARIO
// Convierte su operando en numerico y luego lo niega
strToNumb = -str
console.log(strToNumb) // 42
console.log(typeof(str)) // Strig
console.log(typeof(strToNumb)) // Number



// OPERADOR LOGICO NOT !
// Este invierte el valor booleado de su operando
let isOnline = true;
console.log(!isOnline); // false
let isOffline = false;
console.log(!isOffline); // true



// OPERADOOR BITWISE NOT ~
// Trabaja un numero a base 2, e invierte los bits 
let a = 5; // 00000000000000000000000000000101
let b = -3; // 11111111111111111111111111111101
console.log(~a); // 11111111111111111111111111111010
// Expected output: -6
console.log(~b); // 00000000000000000000000000000010
// Expected output: 2
// En la representación de complemento a dos (que es el estándar para enteros de 32 bits en JavaScript), 
// invertir todos los bits de un número x equivale matemáticamente a la fórmula ==== -(x + 1) ====.
// Por lo tanto, para cualquier número entero dentro del rango de 
// 32 bits (de -2,147,483,648 a 2,147,483,647), la regla siempre se cumplirá

// OPERADOR BITWISE AND &
// El operador AND a nivel de bits (&) devuelve un 1 en cada posición de bit 
// para la cual los bits correspondientes de ambos operandos son 1.
a = 5; // 101
b = 3; // 011
console.log(a & b); // 001
// Expected output: 1

// OPERADOR BITWISE OR |
// El operador a nivel de bits OR (|) devuelve un 1 en cada posición 
// de bit para la cual los bits correspondientes de cualquiera de los operandos son 1. 
// a = 5;  // Binary: 101
// b = 3;  // Binary: 011
console.log(a | b);  // 7 (Binary: 111)

// OPERADOR BITWISE XOR 
// El operador a nivel de bits XOR (^) devuelve un 1 en cada posición de bit para la cual 
// los bits correspondientes de uno, pero no de ambos operandos son 1.
// a = 5;  // Binary: 101
// b = 3;  // Binary: 011
console.log(a ^ b);  // 6 (Binary: 110)

// OPERADOR LEFT SHIFT >>
// El operador de desplazamiento a la izquierda (<<) 
// mueve todos los bits hacia la izquierda un número especificado de posiciones.
// a = 5; // Binary: 101
console.log(a << 1);  // 10 (Binary: 1010)

// OPERADOR RIGHT SHIFT
// El operador de desplazamiento a la derecha (>>) mueve todos los bits hacia la derecha. 
// a = 5;  // Binary: 101
console.log(a >> 1);  // 2 (Binary: 10)




// OPERADOR UNARIO VOID
// void permite ejecutar una funcion o valor, y despues lo elimina, devolviendo UNDEFINED
const output = void 1; // Desde aqui output esta almacenando un valor undefined
console.log(output); // Expected output: undefined
// Trabaja de la siguiente forma
// Paso 1: Se imprime el mensaje en consola.
// Paso 2: La variable 'resultado' NO guarda el mensaje, guarda el vacío.
const resultado = void console.log("Se imprime esto primero");
console.log(resultado); 
// Aquí verás que el valor guardado es: undefined




// OPERADOR UNARIO typeOf
const value = 'Hello world';
console.log(typeof value); // string