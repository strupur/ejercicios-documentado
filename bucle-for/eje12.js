let minutos = +prompt("Ingrese los minutos deseado")

let delay = 100; // Delay in milliseconds
let currentDelay = 0;

for (let i = 0; i <= minutos; i++) {
    for (let j = 0; j <= 59; j++) {
        setTimeout(() => {
            console.clear();
            console.log(`${i}:${j}`);
        }, currentDelay);
        currentDelay += delay;
    }
}

// imprime un numero lo borra ejemplo 0:1 lo borra 0:2 lo borra 0:3 lo borra ...... hasta llegar a 0:59 y luego comienza 1:0 ....