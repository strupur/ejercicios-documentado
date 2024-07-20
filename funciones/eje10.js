function calificar(num) {

    if (num <= 100) {
        return `siglo 1`
    } else if (num <= 200 ) {
        return `siglo 2`
    } else if (num <= 300 ) {
        return `siglo 3`
    } else if (num <= 400 ) {
        return `siglo 4`
    } else if (num <= 500 ) {
        return `siglo 5`
    } else if (num <= 600 ) {
        return `siglo 6`
    } else if (num <= 700 ) {
        return `siglo 7`
    } else if (num <= 800 ) {
        return `siglo 8`
    } else if (num <= 900 ) {
        return `siglo 9`
    } else if (num <= 1000 ) {
        return `siglo 10`
    } else if (num <= 1100 ) {
        return `siglo 11`
    } else if (num <= 1200 ) {
        return `siglo 12`
    } else if (num <= 1300 ) {
        return `siglo 13`
    } else if (num <= 1400 ) {
        return `siglo 14`
    } else if (num <= 1500 ) {
        return `siglo 15`
    } else if (num <= 1600 ) {
        return `siglo 16`
    } else if (num <= 1700 ) {
        return `siglo 17`
    } else if (num <= 1800 ) {
        return `siglo 18`
    } else if (num <= 1900 ) {
        return `siglo 19`
    } else if (num <= 2000 ) {
        return `siglo 20`
    } else {
        return `Escribe un numero del 1 al 2000`
    }
}

console.log(calificar(1910));

// ejercicio mas simple

function calificar1(num) {
    if (num < 1) {
        return "El año debe ser mayor o igual a 1";
    }
    const siglo = Math.ceil(num / 100);
    return `siglo ${siglo}`;
}

console.log(calificar1(1910));  // siglo 20
console.log(calificar1(2000));  // siglo 20
console.log(calificar1(2001));  // siglo 21
console.log(calificar1(100));   // siglo 1
console.log(calificar1(101));   // siglo 2



// Escibe una función que devuelva el siglo al que correponde un año que se la pasa como argumento. El siglo 1 va del año 1 al 100, el siglo 2 va del 101 al 200....
// Por ejemplo si le pido siglo(1910) me dirá siglo 20