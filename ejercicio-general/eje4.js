let num1 = parseInt(prompt("Ingresa el primer número entero:"));
let num2 = parseInt(prompt("Ingresa el segundo número entero:"));
let num3 = parseInt(prompt("Ingresa el tercer número entero:"));

// Asegurarse de que todos los números son diferentes
if(num1 !== num2 && num2 !== num3 && num1 !== num3){
    // Determinar el valor medio
    if((num1 > num2 && num1 < num3) || (num1 < num2 && num1 > num3)) {
        alert("El valor medio es: " + num1);
    } else if((num2 > num1 && num2 < num3) || (num2 < num1 && num2 > num3)) {
        alert("El valor medio es: " + num2);
    } else {
        alert("El valor medio es: " + num3);
    }
} else {
    alert("Por favor, ingresa tres números diferentes.");
}

/*En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como resultado el valor medio de los tres.

Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.

Si el usuario teclea:

3
2
4

La media de los números es 3.*/

//https://www.aulascript.com/evaluar/ejercicios_basicos_1.htm