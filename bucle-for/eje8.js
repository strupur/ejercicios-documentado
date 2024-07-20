// Solicita al usuario que ingrese un número entero
let n = parseInt(prompt("Ingrese un número entero para el tamaño del triángulo:"));

// Verifica si la entrada es un número válido
if (!isNaN(n) && n > 0) {
    let resultado = ""; // Variable para almacenar el resultado del triángulo

    for (let i = 1; i <= n; i++) {
        // Agrega i asteriscos a la línea
        for (let j = 0; j < i; j++) {
            resultado += "*";
        }
        // Agrega un salto de línea después de cada línea de asteriscos
        resultado += "\n";
    }

    console.log(resultado); // Imprime el resultado en la consola
} else {
    console.log("Por favor, ingrese un número entero positivo.");
}

// Se trata de dibujar un triángulo rectángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

// Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.

// Le tecleamos el valor 5. El resultado será:

// *
// **
// ***
// ****
// *****