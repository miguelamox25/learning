// LOGICA CONDICIONAL Y METODOS MATEMATICOS
// Las condicionales permiten al codigo tomar decisiones
// Los valores FALSE en javascript son:
// booleano false
// 0 (cero)
// "" (cadena vacía)
// null
// undefined
// NaN (No es un Número)

// IF

// Dado que null, es un valor falso, no se ejecutará el codigo
if (null) {
  console.log("This will not run.");
}

// Dado que age vale 22, esta cumpliendo. Por lo tanto es TRUE y se ejecuta el codigo
let age = 22;
if (age >= 18) {
 console.log("You're eligible to vote"); // You're eligible to vote
}


// IF ELSE
// Cuando una condición es false, entonces puedes usar una cláusula else
age = 15;
if (age >= 18) {
 console.log("You're eligible to vote");
} else {
 console.log("You're not eligible to vote"); // You're not eligible to vote
}

// Si deseas verificar múltiples condiciones, puedes usar un bloque else if
let score = 87;
if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}

// OPERADOR TERNARIO
// --- Ejemplo 1: Asignación directa a una variable ---
// Esta es su mayor ventaja: al ser una expresión que retorna un valor, 
// puedes guardar el resultado directamente en una constante o variable [3, 4].
const edad = 20;
// Estructura: (condición) ? (valor_si_es_true) : (valor_si_es_false) [5]
const mensaje = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(mensaje); // Imprime: "Es mayor de edad"

// --- Ejemplo 2: Operaciones simples y legibilidad ---
// Se recomienda usarlo para tareas sencillas. Si la lógica es muy larga, 
// es mejor usar un if/else para que el código sea fácil de leer [6].
const isRaining = true;
// En lugar de escribir 5 líneas de if/else, lo resolvemos en una sola [1]
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");

// --- Ejemplo 3: Uso con interpolación de textos ---
// Al retornar un valor, puedes integrarlo dentro de otras expresiones, 
// como las plantillas de texto (template literals) [7].
const puntuacion = 85;
console.log(`Tu examen está ${puntuacion >= 60 ? "Aprobado" : "Suspendido"}`);

// OPERADOR LOGOCO AND &&
let result
// Verifica si ambos operandos son verdaderos y devuelve un resultado.
// Este operador no siempre devuelve TRUE/FALSE
// En el siguiente ejemplo, evalua el primer valor y al ser FALSO, asigna este a la variable y corta la ejecucion
console.log(result = "" && "foo"); // result is assigned "" (empty string)
// En este caso, evalua el primer valor, es TRUE, por lo tanto asigna el 2, luego evalua el 0, es FALSE, devuelve 0
console.log(result = 2 && 0); // result is assigned 0
// En este caso, el primero es TRUE, el segundo es TRUE, por lo tanto devuelve 4
console.log(result = "foo" && 4); // result is assigned 4

// l operador AND lógico es útil cuando deseas verificar múltiples condiciones 
// y asegurarte de que todas sean verdaderas antes de continuar. Aquí hay un ejemplo:
if (2 < 3 && 3 < 4) {
 console.log('The if block runs'); 
} else {
 console.log('The else block runs');
} 

// OPERADOR LOGICO OR ||
// El operador lógico OR verifica si al menos uno de los operandos es verdadero. 
// Si el primer operando es verdadero, devuelve ese valor
// Evaluará hasta que encuentre un TRUE, y ese valor devuelve
// Cuando todos son FALSE, devuelve el ultimo valor
console.log(true || true); // t || t returns true
console.log(false || true); // f || t returns true
console.log(true || false); // t || f returns true
console.log(false || 3 === 4); // f || f returns false
console.log("Cat" || "Dog"); // t || t returns "Cat"
console.log(false || "Cat"); // f || t returns "Cat"
console.log("Cat" || false); // t || f returns "Cat"
console.log("" || false || 0); // f || f || f returns 0
console.log(false || ""); // f || f returns ""
// Es común usar el operador OR lógico dentro de sentencias if/else como esta:
let userInput;
if (userInput || 'Guest') {
 console.log('A user is present');
} else {
 console.log('No user detected');
}

// OPERADOR DE FUSION DE NULOS ??
// El operador ?? es mucho más restrictivo y solo se activa con NULL o UNDEFINED
// ideal para situaciones donde el 0 o una cadena vacía son valores válidos 
// que no deberían ser sustituidos por un valor predeterminado.

const valA = null ?? "default for A";
const valB = "" ?? "default for B";
const valC = 42 ?? 0;

console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42

// En el siguiente ejemplo Tenemos un objeto userSettings con 
// propiedades como theme. Accedemos a ella con userSettings.theme. 
// Como su valor es null, se mostrará "light" en consola.
const userSettings = {
 theme: null,
 volume: 0,
 notifications: false,
};

let theme = userSettings.theme ?? 'light';
console.log(theme); // light