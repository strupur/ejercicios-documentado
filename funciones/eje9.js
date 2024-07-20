function calificar(num) {

    if (num <= 4) {
        return `Tu calificacion es suspenso`
    } else if (num == 5 ) {
        return `Tu calificacion es aprobrado`
    } else if (num == 6 ) {
        return `Tu calificacion es bine`
    } else if (num == 7 || num == 8 ) {
        return `Tu calificacion es notable`
    } else if (num == 9 ) {
        return `Tu calificacion es sobresaliente`
    } else if (num == 10 ) {
        return `Tu calificacion es matrícula`
    } else {
        return `Ingrese un numero del 0 al 10`
    }
}

console.log(calificar());

// En esta función se trata de convertir notas a calificaciones literales de manera que menos de 5 es suspenso, un 5 es aprobado, el 6 es bine, el 7 y el 8 son notable, el 9 es sobresaliente y el 10 es matrícula.
// Por ejemplo si pido miCalificacion(5) la función me dirá tu calificación es Aprobado