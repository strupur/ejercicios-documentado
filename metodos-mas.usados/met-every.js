// aqui todo los numero tiene que cumplir la condicion para que sea verdadero 

const numbers = [1, 3, 5, 8, 9];

// Verificar si todos los números en el array son positivos
const allPositive = numbers.every(num => num > 0);

console.log(allPositive); // Salida: true

//------------------------------------

const numbers1 = [2, 4, 6, 8, 10];

// Verificar si todos los números en el array son pares
const allEven = numbers1.every(num => num % 2 === 0);

console.log(allEven); // Salida: true

//------------------------------------

const cart = [
    { name: 'apple', price: 1.2, quantity: 4 },
    { name: 'banana', price: 0.8, quantity: 2 },
    { name: 'orange', price: 1.5, quantity: 3 }
];

// Verificar si todos los productos en el carrito tienen una cantidad mayor a 0
const allInStock = cart.every(item => item.quantity > 0);

console.log(allInStock); // Salida: true

//------------------------------------

const people = [
    { name: 'Alice', age: 19 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 18 }
];

// Verificar si todas las personas son mayores de edad
const allAdults = people.every(person => person.age >= 18);

console.log(allAdults); // Salida: true

//------------------------------------

const words = ['hello', 'world', 'javascript', 'coding'];

// Verificar si todas las palabras tienen más de 3 letras
const allLongWords = words.every(word => word.length > 3);

console.log(allLongWords); // Salida: true





