// Preguntamos al usuario qué bebida desea
let bebida = prompt("¿Qué desea beber? (vino, cerveza, refresco, agua)");

// Convertimos la entrada a minúsculas para evitar problemas con mayúsculas
bebida = bebida.toLowerCase();

// Verificamos la elección del usuario
if (bebida === "vino" || bebida === "cerveza") {
    alert("Vaya a la barra.");
} else if (bebida === "refresco" || bebida === "agua") {
    alert("Vaya a la tienda.");
} else {
    alert("Opción no válida. Por favor, elija una bebida de la lista.");
}

// Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, para ello el cliente puede pedir vino, cerveza, refresco, agua. Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
// Un cliente ellige vino, aparecerá el mensaje vaya a la barra, en caso contrarío dirá que vaya a la tienda.