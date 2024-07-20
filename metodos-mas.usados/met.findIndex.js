const products = [
    { id: 1, name: 'Camiseta', brand: 'Adidas' },
    { id: 2, name: 'Pantalones', brand: 'Nike' },
    { id: 3, name: 'Zapatos', brand: 'Adidas' },
    { id: 4, name: 'Gorra', brand: 'Puma' }
];

// Encuentra el índice del primer producto con la marca 'Adidas'
const index = products.findIndex(product => product.brand === 'Adidas');

console.log(index); // Salida: 0 (porque el primer producto con la marca 'Adidas' está en el índice 0)

// -------------------------------------------------

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 40 }
];

// Encuentra el índice del primer usuario que tiene una edad mayor o igual a 35
const index1 = users.findIndex(user => user.age >= 35);

console.log(index1); // Salida: 2 (porque el primer usuario con edad mayor o igual a 35 es Charlie, que está en el índice 2)

// -------------------------------------------------

const fruits = ['apple', 'banana', 'mango', 'orange'];

// Encuentra el índice del primer elemento que es 'kiwi'
const index3 = fruits.findIndex(fruit => fruit === 'kiwi');

console.log(index3); // Salida: -1 (porque 'kiwi' no está en el array)

