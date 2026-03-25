// --- INCREMENTO PREFIJO (++variable) ---
let counter = 10;
console.log(`Counter is currently ${counter}`); // Imprime 10

// El valor se incrementa ANTES de ser asignado a 'updatedCounter'
let updatedCounter = ++counter; 
console.log(`Counter is now ${updatedCounter}`); // Imprime 11


// --- INCREMENTO POSFIJO (variable++) ---
let score = 8;
console.log(`Score is currently ${score}`); // Imprime 8

// El valor original (8) se asigna a 'finalScore' y DESPUÉS 'score' aumenta a 9
let finalScore = score++; 
console.log(`Score is still ${finalScore}`); // Imprime 8


// --- DECREMENTO PREFIJO (--variable) ---
let coins = 3;
console.log(`Coins is currently ${coins}`); // Imprime 3

// El valor disminuye ANTES de ser asignado a 'updatedCoins'
let updatedCoins = --coins; 
console.log(`Coins is now ${updatedCoins}`); // Imprime 2


// --- DECREMENTO POSFIJO (variable--) ---
let health = 7;
console.log(`Health is currently ${health}`); // Imprime 7

// El valor original (7) se asigna a 'newHealth' y DESPUÉS 'health' disminuye a 6
let newHealth = health--; 
console.log(`Health is still ${newHealth}`); // Imprime 7