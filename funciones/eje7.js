function invertir(num) {
    // Convertir el número a cadena, invertir la cadena y convertirla de nuevo a número
    const invertido = parseInt(num.toString().split('').reverse().join(''));
    return invertido;
}

function esCapicua(num) {
    // Comparar el número original con el número invertido
    const invertido = invertir(num);
    return num === invertido;
}

// Ejemplos
const numero1 = 123;
const numero2 = 242;

console.log(`El número invertido de ${numero1} es ${invertir(numero1)}. Es capicúa? ${esCapicua(numero1)}`);  // 321, No es capicúa
console.log(`El número invertido de ${numero2} es ${invertir(numero2)}. Es capicúa? ${esCapicua(numero2)}`);  // 242, Sí es capicúa

// scribir una función que reciba un número como argumento y lo devuelva invertido, o sea, escrito del revés. Usar esta función para determinar si un número es capicúa (palíndromo)
// Si ejecuto invertir(123) me deberá devolver el número 321 y me diría que no es capicua. Sin embargo si hago invertir(242) el resultado sería 242, y la prueba me diría que es capicúa.