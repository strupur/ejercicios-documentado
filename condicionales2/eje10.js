let nota = parseInt(prompt("Ingresa la nota del examen (0-10):"));
let calificacion;

switch (true) {
    case (nota >= 0 && nota <= 4):
        calificacion = "suspenso";
        break;
    case (nota >= 5 && nota <= 6):
        calificacion = "aprobado";
        break;
    case (nota >= 7 && nota <= 8):
        calificacion = "notable";
        break;
    case (nota >= 9 && nota <= 10):
        calificacion = "sobresaliente";
        break;
    default:
        calificacion = "Nota inválida";
}

console.log(`Tu calificación es ${calificacion}`);

// En este ejercicio el script convertirá las notas numéricas de un examen en paabras: 0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.
// Si tecleo 8 me dirá "Tu calificación es  notable"