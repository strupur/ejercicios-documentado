let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));

if (num2 === 0) {
    console.log("Error: No se puede dividir por cero.");
} else {
    let dividir = num1 / num2;
    console.log(`Los dos números fueron divididos y el resultado es ${dividir}`);
}

// En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
// Si se entran el número 8 y 2, debe resultar 4

// Si se entran 4 y 0, dbe resultar en un mensaje de error.

//https://www.aulascript.com/evaluar/condicionales_1.htm