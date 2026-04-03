// Debe tener una función truncateString que acepte dos argumentos, el primero es una cadena y el segundo es un número.

// Si la longitud de la cadena es mayor que el número dado, la cadena debe truncarse para reducir la longitud de modo que sea igual al número dado, y ... debe colocarse al final de la cadena truncada.

// Si la longitud de la cadena es igual o menor que el número dado, la cadena debe devolverse sin cambios.
function truncateString(str, num){
  if(str.length > num ){
    return `${str.slice(0,num)}...`
  }else{
    return str
  }
}

console.log(truncateString('Hola mundo',7))