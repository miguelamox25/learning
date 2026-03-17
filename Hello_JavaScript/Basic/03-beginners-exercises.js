/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//This is a one line comment


// 2. Escribe un comentario en varias líneas
/*
This
is a 
multi-line
comment
*/


// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myHero = "Spiderman"
let myCash = 18500
let myWidth = 74.5
let isMale = true
let undefinedVariable
let isNull = null
let mySymbol = Symbol("hello")
let granNumero = BigInt(891281238123781237812378378)


// 4. Imprime por consola el valor de todas las variables
console.log(myHero)
console.log(myCash)
console.log(myWidth)
console.log(isMale)
console.log(undefinedVariable)
console.log(isNull)
console.log(mySymbol)
console.log(granNumero)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myHero)
console.log(typeof myCash)
console.log(typeof myWidth)
console.log(typeof isMale)
console.log(typeof undefinedVariable)
console.log(typeof isNull)
console.log(typeof mySymbol)
console.log(typeof granNumero)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myHero = "Hulk"
myCash = 12500
myWidth = 80
isMale = false
undefinedVariable = true
isNull = null
mySymbol = Symbol("Bye")
granNumero = 23

console.log(myHero)
console.log(myCash)
console.log(myWidth)
console.log(isMale)
console.log(undefinedVariable)
console.log(isNull)
console.log(mySymbol)
console.log(granNumero)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myHero = 12
myCash = "No Cash"
myWidth = "Hello?"
isMale = null
undefinedVariable
isNull = true
mySymbol = 3
granNumero = Symbol("Hellowis")

console.log(myHero)
console.log(myCash)
console.log(myWidth)
console.log(isMale)
console.log(undefinedVariable)
console.log(isNull)
console.log(mySymbol)
console.log(granNumero)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const miNombre = 'miguel'
const miEdad = 29
const miPeso = 74.7
const vivo = true
const nulo = null
const miSimbolo = Symbol("Miguel")
const bigNumero = 984389343428234974327893428934n

// 9. A continuación, modifica los valores de las constantes
//miNombre = 'Angel'

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse