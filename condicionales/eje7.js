let transportes = ["coche", "tren", "bicicleta", "autobus"];

function verificarTransporte(transporte) {
    if (transporte === "tren" || transporte === "autobus") {
        console.log("Recuerde llevar dinero para su ticket.");
    } else {
        console.log("No es necesario llevar dinero para el ticket.");
    }
}

// Pruebas de la función
verificarTransporte("tren");
verificarTransporte("bicicleta");

// Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. Si va en tren o autobus le recordará que lleve dinero para el billete.
// El cliente pide ir en tren, aparecerá el mesnaje "lleva dinero para el ticket"