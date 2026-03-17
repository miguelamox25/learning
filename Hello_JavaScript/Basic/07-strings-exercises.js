/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

let mensaje = 'Cadena extendida'

// 1. Concatena dos cadenas de texto
console.log('Hola saludos' + ' amigo '+mensaje)

// 2. Muestra la longitud de una cadena de texto
console.log(mensaje.length)

// 3. Muestra el primer y último carácter de un string
console.log(mensaje[0])
console.log(mensaje[15])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(mensaje.toUpperCase())
console.log(mensaje.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log(`Hola 
    Mundo
    En 
    Multilinea`)

// 6. Interpola el valor de una variable en un string
let nombre = 'Miguel Amox'
console.log(`Hola amigo ${nombre} saludos`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(nombre.replace(' ','-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(mensaje.includes('dena'))

// 9. Comprueba si dos strings son iguales
console.log(mensaje == nombre)

// 10. Comprueba si dos strings tienen la misma longitud
console.log('Longitud de mensaje: '+mensaje.length)
console.log(`Longitud de nombre ${nombre.length}`)
console.log(mensaje.length == nombre.length)