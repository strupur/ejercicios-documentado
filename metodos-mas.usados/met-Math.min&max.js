let array = [3, 1, 4, 1, 5, 9];

// Encontrar el valor mínimo
let minValue = Math.min(...array);
console.log(`El valor mínimo es: ${minValue}`);

// Encontrar el índice del valor mínimo
let minIndex = array.indexOf(minValue);
console.log(`El índice del valor mínimo es: ${minIndex}`);