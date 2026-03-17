/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
const nombrereal = 'Miguel'
if (nombrereal == 'Miguel')
{
    console.log('Bienvenido')
}else{
    console.log('Denegado')
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const realUser = 'Miguel'
const realPass = 'Lulala'

if (realUser == 'Miguel' && realPass == 'Luala'){
    console.log('Exito')
}else{
    console.log('Erorr')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 0
if (number == 0){
    console.log('Es Cero')
}else if(number >= 0 ){
    console.log('Es positivo')
}else{
    console.log('Es negativo')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15
if (edad >= 18){
    console.log('Puedes votar')
}else{
    console.log('No puedes votar. Te faltan: '+(18-edad)+" años")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
console.log(edad >= 18 ? 'Adulto' : 'Menor')


// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 5
if (mes >= 3 && mes <= 5){
    console.log('SPRING')
}else if(mes >=6 && mes <= 8){
    console.log('SUMMER')
}else if(mes >= 9 && mes <= 11){
    console.log('AUTUMN')
}else if(mes <= 12){
    console.log('WINTER')
}else{
    console.log('FUERA DEL RANGO')
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch
switch (mes){
    case 1:
        console.log('31 días')
        break;
    case 2:
        console.log('28 dias')
        break;
    case 3:
        console.log('31 dias')
        break;
    case 4:
        console.log('30 dias')
        break;
    case 5:
        console.log('31 dias')
        break;
    case 6:
        console.log('30 dias')
        break;
    case 7:
        console.log('31 dias')
        break;
    case 8:
        console.log('31 dias')
        break;
    case 9:
        console.log('30 dias')
        break;
    case 10:
        console.log('31 dias')
        break;
    case 11:
        console.log('30 dias')
        break;
    case 12:
        console.log('31 dias')
        break;
    default:
        console.log('Error')
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 4
switch(idioma){
    case 1:
        console.log('BUENOS DÍAS') 
    break;
    case 2:
        console.log('GOOD MORNING') 
    break;
    case 3:
        console.log('GUTEN TAG') 
    break;
    case 4:
        console.log('BON YIA') 
    break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes){
    case 1:
        console.log('WINTER')
        break;
    case 2:
        console.log('WINTER')
        break;
    case 3:
        console.log('SPRING')
        break;
    case 4:
        console.log('SPRING')
        break;
    case 5:
        console.log('SPRING')
        break;
    case 6:
        console.log('SUMMER')
        break;
    case 7:
        console.log('SUMMER')
        break;
    case 8:
        console.log('SUMMER')
        break;
    case 9:
        console.log('AUTUMN')
        break;
    case 10:
        console.log('AUTUMN')
        break;
    case 11:
        console.log('AUTUMN')
        break;
    case 12:
        console.log('WINTER')
        break;
    default:
        console.log('Error')
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7