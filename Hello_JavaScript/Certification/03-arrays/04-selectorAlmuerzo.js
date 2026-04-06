let lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  // Verificamos si el arreglo tiene elementos (arr.length > 0)
  if (arr.length) {
    console.log(`${arr.pop()} removed from the end of the lunch menu.`);
  } else {
    // Es vital que este mensaje sea exacto para el validador
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length) {
    console.log(`${arr.shift()} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length) {
    let max = arr.length;
    /* IMPORTANTE: Usamos Math.floor() en lugar de Math.round().
       Si el arreglo tiene 3 elementos, los índices son 0, 1 y 2.
       Math.random() * 3 da un número entre 0 y 2.99.
       Math.floor() lo baja a 0, 1 o 2. Math.round() podría subirlo a 3, 
       causando un error porque el índice 3 no existe.
    */
    let randomIndex = Math.floor(Math.random() * max);
    let lunch = arr[randomIndex];
    
    // El requisito pedía LOGUEAR (console.log), no solo retornar (return)
    console.log("Randomly selected lunch: " + lunch);
  } else {
    console.log("No lunches available.");
  }
}

function showLunchMenu(arr) {
  if (arr.length) {
    /* Duda clave: ¿Por qué .join(", ")?
       Si usas solo + arr, JS imprime "Greens,Corns,Beans" (sin espacios).
       Con .join(", "), forzamos el espacio después de la coma para que
       el formato sea "Greens, Corns, Beans" tal como pide el ejercicio.
    */
    console.log("Menu items: " + arr.join(", "));
  } else {
    console.log("The menu is empty.");
  }
}

let arreglo = ['Pambazos','Empanadas','HotCakes']
showLunchMenu(arreglo)