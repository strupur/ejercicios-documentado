let articulo = parseInt(prompt("Ingresa un numero"));

let precio = parseInt(prompt("Ingresa un número"));

let multiplicar = articulo * precio;

if ((articulo >= 10) && (precio >=40)){
    console.log(multiplicar - multiplicar * 0.15);
} else {
    console.log("no cumple los requisito para el descuento");
}

console.log("gatito");

// Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.

// Por ejemplo si compras 20 artículos de 50 euros se te descuenta un 15% del total pagarías 20*50 - 20*50*0.15 = 850 eruos.

// (Corregido: gracias Mary)