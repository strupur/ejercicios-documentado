function dividir(a, b) {
    if (b === 0) {
        return 'Error: División por cero';  // Evita la división por cero
    } else {
        return a / b;  // Realiza la división
    }
}

// Almacenar el resultado de la división en una variable
let resultado = dividir(100, 1.9);

// Evaluar el resultado
if (resultado < 40 || resultado > 60) {
    console.log("Fuera");
} else {
    console.log("Aprueba");
}

// En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
// Ejemplo si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.