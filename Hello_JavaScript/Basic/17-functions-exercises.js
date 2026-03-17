/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function funcSuma (num1, num2){
    let suma = num1 + num2
    console.log(`La suma de ${num1} + ${num2} = ${suma}`)
}
// Llamamos la funcion
funcSuma(10, 5)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numeros = [99, 43, 645, 13, 134, 45, 90]

function funcMayor(arreglo){
    let mayor = arreglo[0]
    for (let i = 1; i < arreglo.length; i++){
        if (arreglo[i] > mayor){
            mayor = arreglo[i]
        }
    }
    return mayor
}

console.log(`El array  con tiene los valores [${numeros}] y el valor mas grande es ${funcMayor(numeros)}`)

/*
const funcMayore = arr => Math.max(...arr) // Una forma mas corta

console.log(funcMayore(numeros))
*/
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
let cadena ='hola mundo'

function funcvocals (arr){
    let vocales = 0
    for (let value of arr){
        if(value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u'){
            vocales ++
        }
    }
    return vocales
}

console.log(`La cadena [${cadena}] tiene un total de ${funcvocals(cadena)} vocales`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let array1 = ['victor','omar','miguel','juan','pablo','enrique','mario','luis']

function funcMayusc (vector){ // Se crea la funcion
    let array2 = [] // Generamos el vector nuevo
    for (let value of vector){ // ciclo que itera sobre los valores del vector
        array2.push(value.toUpperCase()) // aqui el metodo push agregara un nuevo valor al vector. Y se pone en mayusc
    }
    return array2 // La funcion retorna el array
}
console.log(funcMayusc(array1)) // Invocamos a la funcion y le pasamos el vector de strings

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(num){
    if (num <= 1) return false

    for (let i = 2; i < num; i++){
        if (num % i == 0){
            return false
        }
    }
    return true
}

console.log(esPrimo(2))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
let numbers1 = [12, 24, 5, 9]
let numbers2 = [9, 5, 12, 2]

function esIgual(arr1, arr2){
    let comunes = []
    for (let valor1 of arr1){
        for (let valor2 of arr2){
            if (valor1 == valor2) {
                comunes.push(valor2)
            }
        }
    }
    return comunes
}

console.log(esIgual(numbers1, numbers2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let numbers3 = [2, 4, 6, 43, 24, 67]

function sumaPar(arr){
    let suma = 0
    for(let value of arr){
        if(value % 2 === 0) suma+= value
    }
    return suma
}

console.log(sumaPar(numbers3))

console.log('==================')
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function cuadrados(arr){
    arr.forEach(element => {
       console.log(`El cuadrado de ${element} es ${element*element}`) 
    });
}

cuadrados(numbers3)

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
cadena = "Anita lava la tina"
function inverso (param){
    for(let valor of param){
        console.log(valor)
    }
}

inverso(cadena)

// 10. Crea una función que calcule el factorial de un número dado
function funcFactorial(num){
    factorial = 1
    for(let i = 1; i <= 5; i++){
        factorial = factorial * i
    }
    return factorial
}
console.log(fun)