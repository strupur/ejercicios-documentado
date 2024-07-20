// dentro del array un numero que cumpla con la condicion arojara true, en el ejemplo de abajo es el 8 true

const numbers = [1, 3, 5, 8, 9];

// Verificar si algún número en el array es par
const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log(hasEvenNumber); // Salida: true

// ---------------------------

const numbers1 = [2, 4, -1, 8, 10];

// Verificar si hay algún número negativo en el array
const hasNegativeNumber = numbers1.some(num => num < 0);

console.log(hasNegativeNumber); // Salida: true

// ---------------------------

const cart = [
    { name: 'apple', price: 1.2, quantity: 4 },
    { name: 'banana', price: 0.8, quantity: 0 },
    { name: 'orange', price: 1.5, quantity: 3 }
];

// Verificar si algún producto en el carrito está agotado
const hasOutOfStockItem = cart.some(item => item.quantity === 0);

console.log(hasOutOfStockItem); // Salida: true

// ---------------------------

const people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 }
];

// Verificar si alguna persona es mayor de edad
const hasAdult = people.some(person => person.age >= 18);

console.log(hasAdult); // Salida: true

// ---------------------------

const words = ['hello', 'world', 'javascript', 'coding'];

// Verificar si alguna palabra contiene la letra 'a'
const hasLetterA = words.some(word => word.includes('a'));

console.log(hasLetterA); // Salida: true

// --------------------------

const numbers2 = [45, 78, 34, 105, 67];

// Verificar si hay algún número mayor a 100
const hasNumberGreaterThan100 = numbers2.some(num => num > 100);

console.log(hasNumberGreaterThan100); // Salida: true





