// Solicitar un número al usuario
let numero = parseInt(prompt("Ingresa un número"));

// Inicializar una variable para almacenar el resultado
let resultado = '';

// Iterar desde 0 hasta el número ingresado
for (let i = 0; i < numero; i++) {
    // Verificar si el número es par
    if (i % 2 === 0) {
        // Concatenar el número par al resultado, seguido de un salto de línea
        resultado += `${i}\n`;
    }
}

// Mostrar el resultado en una ventana de alerta
alert(resultado);


// Se quiere un bucle que genere una lista con todos los números pares positivos por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea (carácter '\n').
// Si tecleo el número el número 9 deberá mostrar cinco lineas con los números 0 2 4 6 8
