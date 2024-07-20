// Inicializa el array vacío
let numeros = [];

// Función para verificar si un número es par
function esPar(num) {
    return num % 2 === 0;
}

// Bucle para leer los números y agregarlos al array
for (;;) { // Bucle for infinito
    let input = prompt("Ingrese un número (0 o no numérico para terminar):");
    let numero = parseFloat(input);

    // Verifica si la entrada es 0 o no es un número
    if (numero === 0 || isNaN(numero)) {
        break;
    }

    // Agrega el número al array
    numeros[numeros.length] = numero;
}

// Mostrar el array de números ingresados
console.log("Array de entrada:", numeros);

// Contadores para pares e impares
let pares = 0;
let impares = 0;

// Bucle para contar pares e impares
for (let i = 0; i < numeros.length; i++) {
    if (esPar(numeros[i])) {
        pares++;
    } else {
        impares++;
    }
}

// Mostrar la cantidad de pares e impares
console.log(`Hay ${pares} números pares y ${impares} números impares.`);



// Diseña un script que vaya leyendo números y guardándolos en un array. Una vez lleno mostrará el array y deberá decir cuantos números son pares y cuantos son impares. La entrada de datos termina cuando el usuario teclea 0 o un valor no numérico.

// Intenta resolverlo sin usar métodos del objeto array, solo indices y longitudes de arrays.

// No debe aceptar valores no numéricos (isNaN(valor) permite detectar valores no numéricos).

// Por ejemplo si tecleo: 3,5,4,6,7,8, 11el script me dirá que el array de entrada es [3,5,4,6,7,8, 11] y que hay 3 pares y 4 impares.



















