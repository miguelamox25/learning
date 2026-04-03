// En este codigo tenemos el mismo ejercicio del conteo con BlackJack, pero esta vez
// empleando un switch y una tecnica llamada
// "Fall-through" (dejar caer)
// Consiste en apilar los casos que comparten el mismo resultado para no repetir código
let count = 0;

function cardCounter(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    // No necesitamos los casos 7, 8 y 9 porque no hacen nada
  }

  if (count > 0) {
    return `${count} Bet`;
  } else {
    return `${count} Hold`;
  }
}

cardCounter(2)
cardCounter(3)
cardCounter(4)
cardCounter(5)
console.log(cardCounter(6))