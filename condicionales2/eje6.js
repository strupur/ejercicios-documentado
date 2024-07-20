let mes = parseInt(prompt("Inserte un número de mes (1-12):"));

const estacion = (mes === 12 || mes === 1 || mes === 2) ? "Invierno" :
                 (mes === 3 || mes === 4 || mes === 5) ? "Primavera" :
                 (mes === 6 || mes === 7 || mes === 8) ? "Verano" :
                 (mes === 9 || mes === 10 || mes === 11) ? "Otoño" :
                 "Mes inválido";

console.log(`Estamos en ${estacion}`);