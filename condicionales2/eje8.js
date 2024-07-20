let oficinas = parseInt(prompt("Inserte numero un oficinas: 1, 2, 3"));

const mensaje = oficinas === 1 ? "1 corresponde al tipo de gasolina dirijase a la oficina numero 100" :
                oficinas === 2 ? "2 corresponde al tipo de diesel, dirijase a la oficina numero 200" :
                oficinas === 3 ? "3 corresponde al tipo electrico dirijase a la oficina numero 300" :
                "Elija un numero del 1 al 3";

console.log(mensaje);

// En una tienda coches se quiere redirigir a un cliente hacia una sección de acuerdo al tipo de coche que elija. Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 2 irá a la oficina 200 y si elige eléctrico o 3 se le enviará a la oficina 300.
// Por ejemplo tecleo el número 2, el mesnaje me dirá que vaya a la oficina 200