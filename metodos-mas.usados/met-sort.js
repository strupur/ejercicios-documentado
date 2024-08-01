// Estos ejemplos ilustran cómo utilizar el método sort() con diferentes tipos de datos y criterios de ordenación en JavaScript. El método sort() es muy versátil y puede personalizarse según las necesidades específicas utilizando funciones de comparación.

// Array de números
const numbers = [4, 2, 5, 1, 3];

// Ordenar números de menor a mayor
numbers.sort((a, b) => a - b);

console.log(numbers); // Salida: [1, 2, 3, 4, 5]

//-----------------------------------------

// Array de números
const numbersDesc = [4, 2, 5, 1, 3];

// Ordenar números de mayor a menor (descendente)
numbersDesc.sort((a, b) => b - a);

console.log(numbersDesc); // Salida: [5, 4, 3, 2, 1]

//-----------------------------------------

// Array de cadenas
const words = ['banana', 'apple', 'cherry', 'date'];

// Ordenar cadenas alfabéticamente
words.sort((a, b) => a.localeCompare(b));

console.log(words); // Salida: ['apple', 'banana', 'cherry', 'date']

//------------------------------------------

// Ordenar objetos por una propiedad (edad)

// Array de objetos
const people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Mike', age: 35 }
];

// Ordenar objetos por la propiedad 'age' en orden ascendente
people.sort((a, b) => a.age - b.age);

console.log(people);
// Salida:
// [ { name: 'Jane', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Mike', age: 35 } ]

//---------------------------------------------

//Ordenar objetos por una propiedad (nombre) alfabéticamente

// Array de objetos
const peopleByName = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Mike', age: 35 }
];

// Ordenar objetos por la propiedad 'name' alfabéticamente
peopleByName.sort((a, b) => a.name.localeCompare(b.name));

console.log(peopleByName);
// Salida:
// [ { name: 'Jane', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Mike', age: 35 } ]

//---------------------------------------------

//Ordenar fechas en orden cronológico

// Array de fechas
const dates = [
    new Date(2023, 5, 1),
    new Date(2021, 11, 25),
    new Date(2022, 7, 30)
];

// Ordenar fechas en orden ascendente
dates.sort((a, b) => a - b);

console.log(dates);
// Salida:
// [ Sat Dec 25 2021 ...,
//   Tue Aug 30 2022 ...,
//   Thu Jun 01 2023 ... ]

//----------------------------------------------

// Ordenar números con valores negativos

// Array de números con valores negativos
const mixedNumbers = [3, -2, 0, -1, 2, 1];

// Ordenar números de menor a mayor
mixedNumbers.sort((a, b) => a - b);

console.log(mixedNumbers); // Salida: [-2, -1, 0, 1, 2, 3]

//------------------------------------------------

// Ordenar números decimales

// Array de números decimales
const decimals = [4.2, 2.5, 5.1, 1.3, 3.7];

// Ordenar números de menor a mayor
decimals.sort((a, b) => a - b);

console.log(decimals); // Salida: [1.3, 2.5, 3.7, 4.2, 5.1]
