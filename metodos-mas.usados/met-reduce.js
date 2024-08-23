// Claro, el método reduce en JavaScript es una herramienta poderosa y flexible que se utiliza para reducir un array a un solo valor. Esto se puede lograr aplicando una función acumulativa a cada elemento del array, de izquierda a derecha. La función acumulativa toma dos argumentos: el acumulador y el valor actual.

const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
}, 0);

console.log(suma); // Salida: 15


// ---------------------------

const numbers1 = [1, 3, 7, 2, 5,];

// Encontrar el valor máximo en el array
const max = numbers1.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), -Infinity);

console.log(max); // Salida: 7

// ---------------------------

const sentence = 'hello world';

// Contar la cantidad de veces que cada letra aparece en la cadena
const letterCount = sentence.split('').reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(letterCount); // Salida: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// ---------------------------

const nestedArray = [[1, 2], [3, 4], [5, 6]];

// Aplanar un array de arrays
const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

console.log(flatArray); // Salida: [1, 2, 3, 4, 5, 6]

// ---------------------------

const cart = [
    { name: 'apple', price: 1.2, quantity: 4 },
    { name: 'banana', price: 0.8, quantity: 6 },
    { name: 'orange', price: 1.5, quantity: 3 }
];

// Calcular la suma del precio total de los productos en el carrito de compras
const totalPrice = cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);

console.log(totalPrice); // Salida: 13.8

// ---------------------------

const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 }
];

// Agrupar personas por edad
const groupedByAge = people.reduce((accumulator, person) => {
    if (!accumulator[person.age]) {
        accumulator[person.age] = [];
    }
    accumulator[person.age].push(person);
    return accumulator;
}, {});

console.log(groupedByAge);
// Salida:
// {
//   '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }],
//   '25': [{ name: 'Bob', age: 25 }, { name: 'David', age: 25 }]
// }
