// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 0; i <= 20; i++){
    console.log(`Hola ${i}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma =  0
for (i = 0; i <=  100; i++){
    suma += i
}
console.log(`La suma de los numeros es ${suma}`)
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (i = 0; i <= 100; i +=  2){
    console.log(i)
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ['Miguel','Angel','Juana','Luisa']
for (let valores of nombres){
    console.log(valores)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = 'agua paso por mi casa, cate de mi corazon'
let vocales = 0
for(let valor of cadena){
    if ( valor == 'a' || valor == 'e' || valor == 'i' || valor == 'o' || valor == 'u')
        vocales +=1
}
console.log(cadena)
console.log(`En la cadena anterior existen ${vocales} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [1, 2, 3, 4, 5]
let multi = 1
for (let valores of numeros){
    multi *= valores
}
console.log(multi)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for ( let i = 1; i <=  10; i++){
    console.log(`5 x ${i} = ${i*5}`)
}

// 8. Usa un bucle para invertir una cadena de texto|
let invertido = []
let j = cadena.length
for (let valores of cadena){
    j--
    invertido[j] = valores
}
for (let j = 0; j < cadena.length; j++){
    console.log(invertido[j])
}


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let vector=[], f
vector[0] = 0
vector[1]= 1
for( f = 2; f <= 10; f++){
    vector[f] = vector[f-1]+vector[f-2]
}
for(f = 0; f <= 10; f++){
    console.log(vector[f])
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log('============================================')
let array1 = [6, 15, 8, 30, 2, 11, 120, 45, 7, 10, 9, 18, 34], array2=[]
for(let numbers of array1){
    if(numbers >= 10)
        array2.push(numbers)
}

for(let i = 0; i < array2.length; i++){
    console.log(array2[i])
}