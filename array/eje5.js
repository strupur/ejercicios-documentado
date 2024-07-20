// Función para encontrar el número menor y su índice
function encontrarMinimo(arr) {
    if (arr.length === 0) {
        return "El array está vacío.";
    }
    
    let min = arr[0];  // Inicializar el valor mínimo con el primer elemento del array
    let minIndex = 0;  // Inicializar el índice del valor mínimo con el primer índice

    // Recorrer el array para encontrar el número mínimo y su índice
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    return `El número mínimo es ${min} y su índice es ${minIndex}`;
}

// Array de ejemplo
let array = [5,6,2,8,9];

// Llamar a la función y mostrar el resultado
console.log(encontrarMinimo(array));//El número mínimo es 2 y su índice 

//-----------------------------------

// Array de ejemplo
let array1 = [3, 1, 2];

// Encontrar el valor mínimo usando Math.min y el operador spread (...)
let min = Math.min(...array1);

// Encontrar el índice del valor mínimo usando indexOf
let minIndex = array1.indexOf(min);

console.log(`El número mínimo es ${min} y su índice es ${minIndex}`);//El número mínimo es 1 y su índice es 1


// Escribe una función que pueda devolver el valor más pequeño de un array numérico o el índice de ese valor. El segundo parámetro de la función dirá si debe devolver el valor ("v") o el índice ("i"). No uses métodos del objeto array.

// Se supone que el primer parámetro siempre será una matriz llena con al menos 1 número y sin duplicados.

// Se suponer el segundo parámetro será una letra con uno de dos valores: 'v' 'i'

// min([4,5,7], 'v')  devolverá 4, mientras que min([4,5,7], 'i') devolverá 0.



