/**
 * Función: convertCtoF
 * Propósito: Convertir una temperatura dada en grados Celsius a Fahrenheit.
 * @param {number} celcius - La temperatura en grados Celsius.
 * @returns {number} La temperatura convertida a grados Fahrenheit.
 */
function convertCtoF(celcius) {
  // Fórmula matemática: (Celsius * 1.8) + 32
  // Usamos (9/5) que es igual a 1.8 para mantener la precisión de la fórmula estándar.
  let fahrenheit = celcius * (9 / 5) + 32;

  // La palabra clave 'return' envía el resultado de la operación fuera de la función.
  return fahrenheit;
}

// --- PRUEBAS EN CONSOLA ---
// Ejecutamos la función con distintos valores (argumentos) para verificar que la lógica sea correcta.

console.log(convertCtoF(0));   // Punto de congelación del agua: debería dar 32
console.log(convertCtoF(-30)); // Clima extremadamente frío
console.log(convertCtoF(-10)); // Clima frío
console.log(convertCtoF(20));  // Temperatura ambiente agradable (aprox. 68°F)
console.log(convertCtoF(30));  // Clima caluroso (aprox. 86°F)