alert("Este pequeño programa te ayudara a calcular el area o perimetro de un cuadrado, pulse aceptar para continuar")

let lado = prompt("Escribe un número para calcular el área o el perímetro de un cuadrado:");
lado = Number(lado);

// Verificamos que el valor ingresado sea un número
if(isNaN(lado)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    let eleccion = prompt("Escribe 'área' para calcular el área o 'perímetro' para calcular el perímetro:");

    if(eleccion.toLowerCase() === 'área') {
        let area = lado * lado;
        console.log("El área del cuadrado es: " + area);
    } else if(eleccion.toLowerCase() === 'perímetro') {
        let perimetro = lado * 4;
        console.log("El perímetro del cuadrado es: " + perimetro);
    } else {
        console.log("Debe escribir 'área' o 'perímetro' para realizar el cálculo, vamos a intentarlo desde el principo pulse cargar pagina.");
    }
}

/*En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.

El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.

Lado 40

El area es 1600

El perímetro es 169*/

//https://www.aulascript.com/evaluar/ejercicios_basicos_1.htm