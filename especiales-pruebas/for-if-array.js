let miArreglo = [];

for (let i = 0; i < 30; i += 2) {
    miArreglo.push(i);
}

// Recorriendo el arreglo para verificar cada elemento
miArreglo.forEach(numero => {
    if (numero % 2 === 0) {
        console.log(numero + " Es par");
    } else {
        console.log(numero + " No es par");
    }
});

// hice este programa que me diga si mi numeros que estan adentro de mi arreglo son par o no 

//Explicacion:

// El arreglo miArreglo se llena con números del 0 al 28, incrementando de dos en dos. Esto significa que todos los números en el arreglo ya son pares.

// Después de llenar el arreglo, utilizo el método .forEach() para recorrer cada elemento del arreglo.

// Dentro del bucle .forEach(), uso un if para verificar si cada número es par. Dado que todos los números que agregaste son pares (porque incrementas de dos en dos desde cero), el mensaje "Es par" siempre se imprimirá.

// No es necesario verificar si los números son impares en este caso específico porque sabemos que todos son pares debido a cómo los generamos. Sin embargo, el if está configurado de manera que podría identificar números impares si los hubiera.