// < ?========= metodo find =========>

    const numbers2 = [1, 2, 3, 4, 5, 6];

    // Encontrar el primer número mayor que 4
    const foundNumber = numbers2.find(num => num > 4);
    
    console.log(foundNumber); // 5

    // ---------------------------------------
    
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
    ];
    
    // Encontrar la primera persona que tiene una edad mayor a 28
    const foundPerson = people.find(person => person.age > 28);
    
    console.log(foundPerson); // { name: 'Bob', age: 30 }

    
    // ---------------------------------------
    
    const fruits = ['apple', 'banana', 'cherry', 'date'];

// Encontrar la primera fruta que empieza con la letra 'b'
const foundFruit = fruits.find(fruit => fruit.startsWith('b'));

console.log(foundFruit); // 'banana'

// ---------------------------------------

const mixedNumbers = [3, 7, -5, 13, -8, 21];

// Encontrar el primer número negativo
const foundNegativeNumber = mixedNumbers.find(num => num < 0);

console.log(foundNegativeNumber); // -5

// ---------------------------------------
