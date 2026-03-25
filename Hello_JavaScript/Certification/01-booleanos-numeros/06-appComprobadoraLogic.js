// 1. CONDICIONALES BOOLEANOS SIMPLES
// Declaramos una constante con un valor booleano (true o false).
const hasDeveloperJob = true;

// El bloque 'if' evalúa lo que hay entre paréntesis.
// Si es 'true', ejecuta el código dentro de las llaves {}.
if (hasDeveloperJob) {
  console.log("Timmy is employed as a developer.");
}

// 2. EVALUANDO VALORES FALSOS
const isTimmyAGamer = false;

// Como 'isTimmyAGamer' es 'false', JavaScript saltará este bloque por completo.
// El mensaje no aparecerá en la consola.
if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.");
}

// 3. OPERADORES DE COMPARACIÓN Y BLOQUE 'ELSE'
const timmyAge = 18;

// Aquí usamos un operador de comparación: '>=' (mayor o igual a).
// El resultado de (18 >= 16) es 'true'.
if (timmyAge >= 16) {
  // Se ejecuta si la condición es verdadera.
  console.log("Timmy is old enough to drive.");
} else {
  // Se ejecuta como "plan B" si la condición de arriba fue falsa.
  console.log("Timmy is not old enough to drive.");
}