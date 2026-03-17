/* Creador de oraciones
En este laboratorio, crearás dos historias diferentes utilizando una plantilla de oraciones. 
Usarás variables para almacenar diferentes partes de la historia y luego mostrarás las historias en la consola.

Objetivo: Cumplir con las historias de usuario a continuación y pasar todas las pruebas para completar el laboratorio.
*/

// 1 Declaracion de variables
let adjective
let noun
let verb
let place
let adjective2
let noun2

// 2 Asignacion de valores
adjective = 'misterioso'
noun = 'joven'
verb = 'camina'
place = 'casa embrujada'
adjective2 = 'oscuro'
noun2 = 'anciano'

// 3 Variable firstStory
let firstStory

// 4 Historia
firstStory = 'Once upon a time, there was a(n) ' + adjective + ' ' + noun 
    + ' who loved to eat ' + noun2 + '. The '+noun+' lived in a '+place
    +' and had '+adjective2+' nostrils that blew fire when it was '+verb+'.'

// 5 Mostrar la primer historia
console.log('Fist Story: '+firstStory)

// 6 Nuevos valores
adjective = 'feliz'
noun = 'perro'
verb = 'estornudar'
place = 'el parque'
adjective2 = 'impresionante'
noun2 = 'oso'

// 7 Nueva variable
let secondStory


// 8 Creando la nueva historia
secondStory = 'Once upon a time, there was a(n) ' + adjective + ' ' + noun 
    + ' who loved to eat ' + noun2 + '. The '+noun+' lived in a '+place
    +' and had '+adjective2+' nostrils that blew fire when it was '+verb+'.'

// 9 Mostrando la segunda historia
console.log('Second story: '+secondStory)