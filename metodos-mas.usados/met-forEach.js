const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
    console.log(numero);
});

// Output:
// 1
// 2
// 3
// 4
// 5

// ------------------------------------

// Sumar todos los elementos de un array

const numeros1 = [1, 2, 3, 4, 5];
let suma = 0;

numeros1.forEach(function(numero) {
    suma += numero;
});

console.log(suma);  // Output: 15

// ------------------------------------

// Iterar sobre un array de objetos

const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 28 }
];

personas.forEach(function(persona) {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

// Output:
// Juan tiene 30 años
// Ana tiene 25 años
// Luis tiene 28 años

// ------------------------------------

const numeros2 = [1, 2, 3, 4, 5];

numeros2.forEach(function(numero, indice, array) {
    array[indice] = numero * 2;
});

console.log(numeros2);  // Output: [2, 4, 6, 8, 10]

