function confirmEnding(str, verifyStr){
  let indx = verifyStr.length
  let cadena = str.slice(-indx)
  if(cadena === verifyStr){
    return true
  }else{
    return false
  }
}

console.log(confirmEnding('Hola','la'))