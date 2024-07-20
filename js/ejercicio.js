let array = [3, 1, 4, 1, 5, 9];

// Encontrar el valor mínimo
let minValue = Math.min(...array);
console.log(`El valor mínimo es: ${minValue}`);

// Encontrar el índice del valor mínimo
let minIndex = array.indexOf(minValue);
console.log(`El índice del valor mínimo es: ${minIndex}`);

// El valor mínimo es: 1
// ejercicio.js:9 El índice del valor mínimo es: 1

//-------------------------------

let array1 = [3, 1, 4, 1, 5, 9];

// Encontrar el valor máximo
let maxValue = Math.max(...array1);
console.log(`El valor máximo es: ${maxValue}`);

// Encontrar el índice del valor máximo
let maxIndex = array1.indexOf(maxValue);
console.log(`El índice del valor máximo es: ${maxIndex}`);

// El valor máximo es: 9
// ejercicio.js:24 El índice del valor máximo es: 5