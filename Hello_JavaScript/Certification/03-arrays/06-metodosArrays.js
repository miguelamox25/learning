// Metodo indexOf()
// Este metodo devuelve la posicion en la que se encuentra el elemento especificado
// En caso de no encontrarlo devuelve -1
let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
console.log(index); // 1

index = fruits.indexOf("grape");
console.log(index); // -1

// Cuando deseas buscar un elemento despues de un numero especifico puedes pasar un segundo argumento
let colors = ["red", "green", "blue", "yellow", "green"];
index = colors.indexOf("green", 3);
console.log(index); // 4

// el metodo splice()
// Este metodo permitira eliminar elementos de cualquier parte del arrelo
// Y devolvera un array con los elementos eliminados
// Si no elimino nada devuelve un array vacio
// Este metodo modificara el array original
// array.splice(startIndex, itemsToRemove, item1, item2)
fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2); // Se toma la posicion 2, y a partir de ahi elimina 2 elementos

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]

colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple"); // En este caso, a apartir de la posicion 1, elimina 0, y agrega 2 elementos

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);

console.log(numbers); // [1, 6, 7, 8, 4, 5]


// Se puede crear una copia de un array 
// Para que no sea eliminado el original
let original = [1, 2, 3, 4, 5];
let copy = [...original];
copy.splice(2, 1, 6);

console.log(original); // [1, 2, 3, 4, 5]
console.log(copy);     // [1, 2, 6, 4, 5]

// Ejemplo de: eliminar un solo elemento de un arreglo cuando conoces su índice
fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}

console.log(fruits); // ["apple", "banana", "mango"]

// Tambien splice se puede usar para limpiar un array
let array = [1, 2, 3, 4, 5];
array.splice(0);

console.log(array); // []