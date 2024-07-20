// Solicitar las notas al usuario
let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));

// Calcular la media de las notas
let media = (nota1 + nota2 + nota3) / 3;

// Clasificar y mostrar el resultado en función de la media
if (media < 5) {
    alert("Resultado: Suspenso");
} else if (media >= 5 && media < 7) {
    alert("Resultado: Aprobado");
} else {
    alert("Resultado: Notable");
}

// Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y  Notable por encima de 7.
// Para las notas 6, 8, 10 la media es 8 por tanto se califica como Notable