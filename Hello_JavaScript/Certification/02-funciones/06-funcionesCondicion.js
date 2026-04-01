// --- CONSTANTES DE CONFIGURACIÓN ---
// Definimos los umbrales mínimos para cada tipo de préstamo. 
// Usar constantes fuera de la función facilita actualizar los requisitos en un solo lugar.

const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

/**
 * Función: getLoanMessage
 * Propósito: Evaluar el nivel de préstamo basado en ingresos y puntaje de crédito.
 * @param {number} annualIncome - Ingreso anual del solicitante.
 * @param {number} creditScore - Puntaje crediticio del solicitante.
 */
function getLoanMessage(annualIncome, creditScore) {
  
  // CONDICIONAL ANIDADO (Estructura if / else if / else)
  // El orden es importante: evaluamos desde el requisito más estricto al más flexible.

  // Uso del operador lógico AND (&&): Ambas condiciones deben ser verdaderas.
  if (creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  } 
  
  // Si no califica para Duplex, revisamos si llega al nivel de Condo.
  else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan.";
  } 
  
  // Si no califica para los anteriores, revisamos el nivel mínimo (Car).
  else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan.";
  } 
  
  // Caso por defecto: Si no cumple ninguna de las condiciones anteriores.
  else {
    return "You don't qualify for any loans.";
  }
}

// --- PRUEBAS Y EJECUCIÓN ---

// Llamamos a la función con diferentes argumentos y guardamos el resultado (el 'return') en variables.
const duplexLoanMsg = getLoanMessage(85000, 850), // Califica para todo
      condoLoanMsg = getLoanMessage(65000, 690),  // Solo llega a Condo
      carLoanMsg = getLoanMessage(45000, 660),    // Solo llega a Car
      noLoanMsg = getLoanMessage(25000, 550);     // No califica

// Imprimimos los resultados en la consola para verificar la lógica.
console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);