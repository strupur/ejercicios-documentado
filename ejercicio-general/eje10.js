function verificarParidad(num) {
    if (num % 2 == 0) {
        return "Es par";
    } else {
        return "No es par";
    }
}

let num = parseInt(prompt("Ingresa un numero"));
console.log(verificarParidad(num));

/*este ejercicio es un escrip ára verificar si el numero es par con una funcion */

/*este mismo ejercicio sin usar un condicional*/

// var num = parseInt(prompt("Entrar numero entero"));
// var res = num%2;
// var par = res==0;
// console.log("¿Es par? " + par);