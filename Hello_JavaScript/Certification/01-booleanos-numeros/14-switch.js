// La sentencia Switch
// evalúa una expresión y compara su valor con una serie de cláusulas case
// Cuando se encuentra una coincidencia, se ejecuta el bloque de código asociado con ese case
/*
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
    // code to be executed if expression doesn't match any case
}
*/

// las sentencias de switch en JavaScript utilizan comparación estricta (===)
// lo que significa que no realizan conversión de tipos

// fall-through: Es cuando, no se incluye el break despues de cada case, continuando con la ejecucion de los case subsiguientes

// Se usa switch, cuando se va a comparar una sola variable con multiples valores
// útiles cuando se tienen muchas condiciones potenciales para verificar contra una sola variable
let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}