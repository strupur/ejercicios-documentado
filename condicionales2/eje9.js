let compra = parseInt(prompt("Inserte numero"));



const mensaje = compra <= 99 ? console.log(`El valor de la compra es ${compra}`) :
                compra <= 299 ? console.log(`El valor de la compra es ${(compra) - compra * 0.05}` ):
                compra <= 499 ? console.log(`El valor de la compra es ${(compra) - compra * 0.10}` ) :
                console.log(`El valor de la compra es ${(compra) - compra * 0.15   }` );

console.log(mensaje);

// Un comerciante hace descuentos a sus clientes de la siguiente forma:
// Si ha comprado menos de 100 euros no hay descuento
// Si la compra está entre 100 y 300 euros le descuenta un 5%
// Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
// Si la compra supera los 400 euros le descuenta un 15%

// Es decir: hago una compra de 150 euros pago 150 - 5% de 150, o sea 142,5 euros.