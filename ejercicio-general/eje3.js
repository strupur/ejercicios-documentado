let name = prompt("Escribe tu nombre");
let greet = "Hola";

if(!isNaN(name)){
    alert("No puedes ingresar un número, debe ser un nombre");
} else {
    console.log(greet + " " + name);
}

/*Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario.

Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"

Aparecerá el prompt y el usuario escribirá su nombre:

Usuario escribe juan

Hola Juan.*/

//https://www.aulascript.com/evaluar/ejercicios_basicos_1.htm