/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let num1 = 10
let num2 = 2
let suma = num1 + num2
let resta = num1 - num2
let multi = num1 *num2
let division = num1 / num2
let modulo = num1 % num2
let exponente = 3 ** num2
console.log(num1)
console.log(num2)
console.log(suma)
console.log(resta)
console.log(multi)
console.log(division)
console.log(modulo)
console.log(exponente)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let miVariable = 10
// incremento
miVariable++
console.log(miVariable)

// decremento
miVariable--
console.log(miVariable)

miVariable += 2 // suma
console.log(miVariable)

miVariable -=5 // resta
console.log(miVariable)

miVariable *= 3 // multiplicacion
console.log(miVariable)

miVariable /= 2 // division
console.log(miVariable)

miVariable %= 2 // modulo
console.log(miVariable)

miVariable **= 2 // exponente
console.log(miVariable)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(true == true)
console.log(5 > 3)
console.log(10 < 20)
console.log(20 != 43)
console.log(10 == 10)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(true == false)
console.log(1 > 3)
console.log(12 < 1)
console.log(10 != 10)
console.log(10 == 2)

// 5. Utiliza el operador lógico and
console.log(45 > 4 && 3 > 1)

// 6. Utiliza el operador lógico or
console.log(45 < 30 || 45 > 30)

// 7. Combina ambos operadores lógicos
console.log( 5 == 10 && 5 > 1 || 5 < 10 )

// 8. Añade alguna negación
console.log(!false)

// 9. Utiliza el operador ternario
let isOpen = true
isOpen ? console.log('Bienvenido') : console.log('Hasta mañana')

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log( 4 + 5 == 10 - 1 || 5 * 3 > 12 / 3 )