/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animalitos = ['gato','perro','pez','caballo','vaca']
console.log(animalitos[0])
console.log(animalitos[1])
console.log(animalitos[4])

// 2. Añade dos más. Uno al principio y otro al final
animalitos.push('iguana')
animalitos.unshift('tortuga')
console.log(animalitos)

// 3. Elimina el que se encuentra en tercera posición
console.log(animalitos.splice(2,1))

// 4. Crea un set que almacene cinco libros
let miSet = new Set(['DRACULA','METAMORFOSIS','22/11/63','ALQUIMISTA','CUTHULU'])
console.log(miSet)

// 5. Añade dos más. Uno de ellos repetido
miSet.add('HARRY POTTER')
miSet.add('DRACULA')
console.log(miSet)

// 6. Elimina uno concreto a tu elección
miSet.delete('22/11/63')
console.log(miSet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let mapMeses = new Map([
    ['1','Enero'],
    ['2','Febrero'],
    ['3','Marzo'],
    ['4','Abril'],
    ['5','Mayo']
])

console.log(mapMeses)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(mapMeses.has('5'))
console.log(mapMeses.get('5'))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
mapMeses.set('6','Junio')
mapMeses.set('7','Julio')
mapMeses.set('8','Agosto')
console.log(mapMeses)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
// Creando array
let arrayNuevo = ['1','Rojo','2','Azul','3','Verde' ]
console.log(arrayNuevo)

// Convirtiendo Array en Set
let setNuevo = new Set(arrayNuevo)
console.log(setNuevo)

// Almacenar en Map
let mapNuevo = new Map()
mapNuevo.set(arrayNuevo)