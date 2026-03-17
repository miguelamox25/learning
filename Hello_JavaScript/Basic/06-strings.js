// CADENAS DE TEXTO

// CONCATENANDO
let nombre = 'Miguel'
let saludo = 'Hola ' + nombre + '!' // se realiza la concatenacion

console.log(saludo)

// LOGITUD DE CADENA
console.log(saludo.length)

// FUNCIONES DE CADENA
console.log(saludo[1])
console.log(saludo[6])
console.log(saludo.toUpperCase())// Cambia la cadena a mayusculas
console.log(saludo.toLowerCase())// Cambia la cadena a minusculas
console.log(saludo.indexOf('M'))//  Devuelve la posición de una letra 
console.log(saludo.indexOf('!'))
console.log(saludo.includes('Miguel'))// Verifica si se encuentra un texto
console.log(saludo.includes('miguel'))
console.log(saludo.slice(1,5))// Devuelve las posiciones indicadas
console.log(saludo.slice(6,10))
console.log(saludo.replace('Miguel','Amox'))// Reemplaza el texto

// Template Literals

let mensaje = `Hola 
Saludos 
amigo` // Empleando estas comillas se puede escribir texto así
console.log(mensaje)

// Concatenar
console.log(`Hola tu nombre es ${nombre} seas bienvenido`)

let mensaje2 = `Saludos querido amigo, tu nombre es ${nombre} seas bienvenido y que disfrutes tu estancia`
console.log(mensaje2)
