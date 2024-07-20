let delay = 1000; // Tiempo inicial de demora en milisegundos

for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
        console.clear(); // Borra la consola
        console.log(i); // Muestra el número actual
    }, delay);
    delay += 1000; // Incrementa el tiempo de demora para la siguiente iteración
}

// imprime un numero lo borra ejemplo 1 lo borra 2 lo borra 3 lo borra ......

