// Se utilizan variables 'let' para almacenar las cadenas de texto (fortunas). 
// 'let' permite que los valores cambien, a diferencia de 'const' [1, 2].
let fortune1 = 'Your cat will look very cuddly today.'
let fortune2 = 'The weather will be nice tomorrow.'
let fortune3 = 'Be cautious of your new neighbors.'
let fortune4 = 'You will find a new hobby soon.'
let fortune5 = 'It would be wise to avoid the color red today.'

// Cálculo de un número aleatorio entre 1 y 5:
// 1. Math.random() genera un decimal entre 0 (inclusive) y 1 (exclusive) [3].
// 2. La fórmula (max - min) + min escala el rango para que empiece en 1 y tenga un ancho de 4 [4, 5].
// 3. Math.ceil() redondea el resultado hacia arriba al entero más cercano para asegurar que el número sea 1, 2, 3, 4 o 5 [6].
let randomNumber = Math.ceil(Math.random() * (5 - 1) + 1) 

// Declaración de una variable sin inicializar (su valor inicial es 'undefined') [7, 8].
let selectedFortune 

// Estructura de control condicional 'if...else if...else' para definir el flujo [9, 10].
// Se evalúa la variable 'randomNumber' para decidir qué bloque de código ejecutar.
if (randomNumber == 1){
  // Si la condición es verdadera, se asigna la primera fortuna [11, 12].
  selectedFortune = fortune1
}
else if(randomNumber == 2){
  // 'else if' permite realizar comprobaciones intermedias si la primera fue falsa [10, 13].
  selectedFortune = fortune2
}
else if(randomNumber == 3){
  selectedFortune = fortune3
}
else if(randomNumber == 4){
  selectedFortune = fortune4
}
else{
  // El bloque 'else' actúa como el caso por defecto si ninguna condición anterior se cumplió [14, 15].
  selectedFortune = fortune5
}

// Se utiliza el método 'log' del objeto 'console' para imprimir el resultado final en la terminal [16].
console.log(selectedFortune)