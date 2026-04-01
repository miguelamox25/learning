// Esta funcion devuelve TRUE, solo cuando el argumento es un valor booleano
function booWho(valor){
  if(valor === true || valor == false){
    return true
  }else{
    return false
  }
}

console.log(booWho(true))
console.log(booWho(false))
console.log(booWho(1))
console.log(booWho('Hola'))
console.log(booWho())