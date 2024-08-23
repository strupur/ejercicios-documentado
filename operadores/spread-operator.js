// Resumen
// El spread operator (...) te permite:

// Expandir arrays y objetos.
// Combinar arrays/objetos de forma simple.
// Copiar arrays/objetos sin mutar el original.
// Pasar elementos de un array como argumentos a funciones.
// Capturar los elementos "restantes" en una estructura mediante el parámetro rest.
// Es una herramienta poderosa que simplifica la manipulación de datos en JavaScript.

// . 1Ejemplo con Arrays
// Copiar un Array
// Si quieres crear una copia de un array sin modificar el original, puedes hacerlo usando el spread operator.

// javascript
// Copiar código
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // [1, 2, 3]

//----------------------------------------------

// Combinar Arrays
// Si tienes dos arrays y quieres combinarlos en uno solo

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//----------------------------------------------

// Agregar un Elemento a un Array
// El spread operator es muy útil para agregar elementos a un array:

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

console.log(newArray); // [1, 2, 3, 4]

//-----------------------------------------------


// 2. Ejemplo con Objetos
// Copiar un Objeto
// Al igual que con los arrays, puedes hacer una copia de un objeto con el spread operator:

const originalObj = { a: 1, b: 2 };
const copiedObj = { ...originalObj };

console.log(copiedObj); // { a: 1, b: 2 }

//------------------------------------------------

// 3. Ejemplo con Funciones
// Enviar Argumentos a una Función
// El spread operator también se puede usar para enviar los elementos de un array como argumentos a una función:

const numbers = [1, 2, 3, 4];

function sum(a, b, c, d) {
    return a + b + c + d;
}

console.log(sum(...numbers)); // 10

//---------------------------------------------------

// Crear Funciones que Acepten Múltiples Argumentos
// El spread operator puede ser útil para aceptar un número variable de argumentos en una función:

function showItems(...items) {
    console.log(items);
}

showItems(1, 2, 3, 4); // [1, 2, 3, 4]

//---------------------------------------------------

// 4. Rest Parameter con Objetos o Arrays
// En funciones, el spread operator también actúa como rest parameter cuando se usa en la declaración de una función. Esto significa que puede capturar los elementos restantes en un array u objeto.

// Rest Parameter en Arrays

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]
