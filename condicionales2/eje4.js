let menu = prompt("Inserte un menu carne, pescado, verdura");

if (menu.toLowerCase() === "carne") {
    console.log("Desea beber vino tinto");
} else if (menu.toLowerCase() === "pescado") {
    console.log("Desea beber vino blanco");
} else if (menu.toLowerCase() === "verdura") {
    console.log("Desea beber agua");
} else {
    console.log("Elija carne, pescado o verdura");
}

// <==== mismo ejercicio pero en operador ternario operador ternario ====>

let proteina = prompt("Inserte un proteina: carne, pescado, verdura");

const mensaje = proteina.toLowerCase() === "carne" ? "¿Desea beber vino tinto?" :
                proteina.toLowerCase() === "pescado" ? "¿Desea beber vino blanco?" :
                proteina.toLowerCase() === "verdura" ? "¿Desea beber agua?" :
                "Elija carne, pescado o verdura";

console.log(mensaje);

// un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

// Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.

// Por ejemplo he pedido carne, el ejercicio mostrará "¿Desea beber vino tinto?"