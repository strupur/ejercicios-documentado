const numbers = [10, 20, 30, 40, 50];

// Verificar si el número 30 está en el array
const hasThirty = numbers.includes(30);

console.log(hasThirty); // Salida: true

// Verificar si el número 60 está en el array
const hasSixty = numbers.includes(60);

console.log(hasSixty); // Salida: false

// ------------------------------------

const fruits = ['apple', 'banana', 'mango', 'orange'];

// Verificar si la fruta 'mango' está en el array
const hasMango = fruits.includes('mango');

console.log(hasMango); // Salida: true

// Verificar si la fruta 'kiwi' está en el array
const hasKiwi = fruits.includes('kiwi');

console.log(hasKiwi); // Salida: false

// ------------------------------------

const sentence = 'The quick brown fox jumps over the lazy dog';

// Verificar si la palabra 'fox' está en la cadena
const hasFox = sentence.includes('fox');

console.log(hasFox); // Salida: true

// Verificar si la palabra 'cat' está en la cadena
const hasCat = sentence.includes('cat');

console.log(hasCat); // Salida: false

// ------------------------------------


const sentence1 = 'The quick brown fox jumps over the lazy dog';

// Verificar si la palabra 'quick' está en la cadena empezando desde el índice 4
const hasQuickFromIndex = sentence1.includes('quick', 4);

console.log(hasQuickFromIndex); // Salida: true

// Verificar si la palabra 'quick' está en la cadena empezando desde el índice 10
const hasQuickFromIndex10 = sentence1.includes('quick', 10);

console.log(hasQuickFromIndex10); // Salida: false

// ------------------------------------

let array = ["un texto", "dos texto","tres"]

console.log(array.includes("un texto"));//true 
console.log(array.includes(" texto"));//false 
