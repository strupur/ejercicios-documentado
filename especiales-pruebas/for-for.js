// Este código imprime la tabla de multiplicar del 1 al 5
for (let i = 1; i <= 5; i++) { // Bucle externo: determina el primer factor
    for (let j = 1; j <= 6; j++) { // Bucle interno: determina el segundo factor
        console.log(`${i} * ${j} = ${i * j}`); // Imprime el producto de i y j
    }
    console.log('-----------'); // Separa cada tabla de multiplicar con una línea
}

// El bucle externo maneja el primer número de la multiplicación (del 1 al 5).
// El bucle interno maneja el segundo número de la multiplicación (también del 1 al 5).
// Cada vez que el bucle interno termina una iteración completa, el bucle externo avanza un paso, y el bucle interno comienza de nuevo.