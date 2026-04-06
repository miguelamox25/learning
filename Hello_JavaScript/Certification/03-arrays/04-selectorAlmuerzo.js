let lunches = [] 
function addLunchToEnd(arr, str){
  arr.push(str)
  console.log(`${str} added to the end of the lunch menu.`)
  return arr
}

function addLunchToStart(arr, str){
  arr.unshift(str)
  console.log(`${str} added to the start of the lunch menu.`)
  return arr
}

function removeLastLunch(arr){
  if(array.length){ 
    console.log(`${arr.pop()} removed from the end of the lunch menu.`)    
  }else{
    console.log("No lunches to remove.")
  }
  return arr
}

