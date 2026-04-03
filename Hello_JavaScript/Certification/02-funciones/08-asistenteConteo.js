// Declaramos la variable 'count' de forma global iniciando en 0.
// Al estar fuera de la función, su valor no se reinicia, sino que se guarda y acumula entre cada jugada.
let count = 0;

function cardCounter(card) {
  // 1ER PASO: ACTUALIZAR EL CONTADOR
  
  // Evaluamos si la carta es alta (10 o figura).
  // Usamos '===' (igualdad estricta) para que la comparación sea más segura.
  if (card >= 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    // Si la carta favorece a la casa, restamos 1 al contador global.
    count--;
  } 
  // Si no fue alta, evaluamos si es una carta baja (del 2 al 6).
  else if (card > 1 && card <= 6) {
    // Si la carta favorece al jugador, sumamos 1 al contador global.
    count++;
  }
  // (Omitimos el caso de las cartas 7, 8 y 9 porque no necesitamos hacer nada con ellas)

  // 2DO PASO: RETORNAR EL RESULTADO
  
  // Evaluamos cómo quedó la variable 'count' después de haberla sumado o restado.
  // Si el contador es estrictamente mayor a 0 (positivo), el jugador tiene ventaja.
  if (count > 0) {
    return `${count} Bet`;
  } 
  // Si el contador es 0 o negativo, la casa tiene ventaja.
  else {
    return `${count} Hold`;
  }
}

// SIMULACIÓN DE LA PRUEBA (Caso de ejemplo)
// El sistema evaluador llama a tu función varias veces seguidas de forma invisible:
cardCounter(2); // count sube a 1
cardCounter(3); // count sube a 2
cardCounter(4); // count sube a 3
cardCounter(5); // count sube a 4

// La última llamada evalúa la última carta y además nos muestra el retorno final en la consola.
console.log(cardCounter(6)); // count sube a 5. Como 5 es mayor a 0, imprime: "5 Bet"