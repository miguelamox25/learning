// --- FUNCIONES DE OPERACIONES BÁSICAS ---

// Esta función recibe dos "parámetros" (num1 y num2)
// Los parámetros son como cajas vacías que llenaremos al llamar la función
function calculateSum(num1, num2) {
  // 'return' devuelve el resultado hacia afuera de la función
  return num1 + num2;
}

// Aquí "llamamos" a la función pasando "argumentos" reales (2 y 5)
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  // El orden aquí es vital: el primero menos el segundo
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  // El asterisco (*) es el operador de multiplicación en programación
  return num1 * num2;
}

console.log(calculateProduct(13, 5));


// --- SECCIÓN DE LÓGICA Y MATEMÁTICAS AVANZADAS ---

function calculateQuotient(num1, num2) {
  // Antes de dividir, verificamos si el segundo número es cero
  // Esto es una "validación" para evitar errores matemáticos
  // Si num2 es 0, devuelve el texto de error; si no, hace la división (/)
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0)); // Prueba del caso de error

function calculateSquare(num) {
  // El doble asterisco (**) significa "elevado a la potencia"
  // En este caso, el número multiplicado por sí mismo (potencia 2)
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  // Math.sqrt es una herramienta que ya viene dentro de JavaScript
  // Nos ahorra tener que escribir nosotros la fórmula de la raíz cuadrada
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));