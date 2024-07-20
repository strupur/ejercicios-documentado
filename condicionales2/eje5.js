let creditos = prompt("Inserte solo una de estas opciones: 1 credito, 2 creditos, 3 creditos, 4 creditos");

const mensaje = creditos.toLowerCase() === "1 credito" ? "puede acceder a la sala de consolas" :
                creditos.toLowerCase() === "2 creditos" ? "puede acceder a la sala de consola y juegos 2D" :
                creditos.toLowerCase() === "3 creditos" ? "puede acceder a la sala de consola + juegos 2D y juegos 3D" :
                creditos.toLowerCase() === "4 creditos" ? "puede acceder a la sala de consola + juegos 2D + juegos 3D y Realidad virtual" :
                "Elija entre estas opciones 1 credito, 2 creditos, 3 creditos, 4 creditos ";

console.log(mensaje);

// En una sala de juegos existen tre salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.

// Tecleo que pago 2 créditos, el escript me dirá que puedo acceder a las salas de consola y juegos 2D.