const cadenaDeLetrasRepetidas = (letra, num) => {
    resultado = "";

for (let index = 1; index <= num; index++) {

    resultado = resultado + `${letra}`
}
    console.log(resultado)

}
cadenaDeLetrasRepetidas("a", 5);

// Definir una función que cree una cadena de letras repetidas tantas veces como le digamos. La función recibe dos argumentos: la letra y el número de repeticiones.
// Al ejecutar repetir('a', 5) deberá devover la cadena  aaaaa.