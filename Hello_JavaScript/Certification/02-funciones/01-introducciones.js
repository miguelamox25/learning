// INTRODUCCIÓN A FUNCIONES

// De esta manera podemos declarar una funcion
// Que ejecutará el fragmento de código 
function greet1() {
  console.log("Hello, Miguel!");
}

greet1() // Llamada a la funcion

// Los parámetros actúan como marcadores de posición para los valores que se pasarán a la función cuando se llame
// Esto me permite que el fragmento de codigo, actue usando valores distintos sin volver a escribir
function greet(name) { // En este caso el parametro de name
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!

// Cuando una función termina su ejecución, siempre devolverá un valor. 
// Por defecto, el valor de regreso será undefined.
function doSomething() {
  console.log("Doing something...");
}

let result = doSomething();
console.log(result); // undefined

// Funcion anonima
// Una función anónima es una función sin nombre que puede asignarse a una variable
const sum = function (num1, num2){
  return num1 + num2
};

console.log(sum(5,7))

// Las funciones admiten parametros predeterminados
// Estos asignan un valor en caso de que la funcion se llame sin argumento
function saludo(name = 'Compañero'){
  console.log(`Saludos ${name}!`)
}
saludo() // Sin argumento
saludo('Miguel') // Con argumento

// Funciones flecha
const greetings = (name) => {
  console.log("Hello, " + name + "!");
};

// Cuando la lista de parametros, solo contiene uno, se puede eliminar los parentesis
let saludo1 = nombre =>{console.log(`Hola ${nombre}`)} // Aqui tenemos la funcion declarada en una sola linea
saludo1('Miguel Ángel')

// Cuando la funcion flecha, no tiene parametros, puedes declarar asi
let saludo2 = () =>{console.log(`Hola función flecha sin parametros`)}
saludo2()

// Cuando la función solo contiene una línea de código, puedes eliminar las llaves así
let saludo3 = nombre => console.log('SALUDOS FUNCION SIN COMILLAS')
saludo3()

// Funcion flecha empleando la sentencua return
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(calculateArea(5, 3)); // 15

// El siguiente es una funcion similar, pero mas limpia
const calculateArea1 = (width, height) => {
  return width * height;
}; 

console.log(calculateArea1(5, 3)); // 15

// La siguiente es la misma funcion pero en una sola linea, NO USAR RETURN
const calculateArea3 = (width, height) => width * height;
console.log(calculateArea3(10,5))

// La funcion flecha, Son especialmente útiles para ejecutar lógica sencilla en una sola línea
// Comunmente se usa para trabajar con forEach