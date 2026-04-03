// 1. DECLARACIÓN DE VARIABLES
// Declaramos las cajas donde guardaremos nuestros datos fuera de la función.
let year;
let result;

// 2. LA MÁQUINA (FUNCIÓN)
// Creamos la función que recibe un dato. Internamente, a ese dato lo llamaremos 'num'.
function isLeapYear(num) {
  
  // Calculamos los residuos (%) para saber si 'num' es divisible por estas cantidades.
  // Si el residuo es 0, significa que la división es exacta.
  let by4 = num % 4;     // Regla base
  let by100 = num % 100; // Primera excepción
  let by400 = num % 400; // Excepción de la excepción

  // Primer filtro: Comprobamos si el año es divisible por 4.
  if (by4 === 0) {
    
    // Si pasó el primer filtro, evaluamos las excepciones:
    // ¿Cumple que NO es divisible por 100 (!= 0) O (||) que SÍ es divisible por 400 (=== 0)?
    if (by100 != 0 || by400 === 0) {
      
      // Si cumple la regla, SÍ es bisiesto. 
      // La palabra 'return' expulsa este texto de la función y detiene su ejecución aquí mismo.
      return num + ' is a leap year.';
      
    } else {
      // Si fue divisible por 100 pero NO por 400, es un falso bisiesto.
      return num + ' is not a leap year.';
    }
    
  } else {
    // Si desde el principio NO fue divisible por 4, lo descartamos inmediatamente.
    return num + ' is not a leap year.';
  }
}

// 3. USO DE LA FUNCIÓN
// Asignamos el número que queremos evaluar a nuestra variable 'year'.
year = 2024;

// Llamamos a la función pasándole 'year' (2024). 
// La función procesa el número y lo que nos devuelve (gracias a su 'return') 
// lo atrapamos y lo guardamos dentro de la variable 'result'.
result = isLeapYear(year);

// Imprimimos en la pantalla lo que quedó guardado en 'result'.
console.log(result);