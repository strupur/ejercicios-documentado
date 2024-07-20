let comensal = parseInt(prompt("Ingresa el número de comensal"));

let papas = 200;
let huevos = 1;
let cebollas = 60;

let calculoDeIngredientePapas = comensal * papas;
let mensajePapas;

if (calculoDeIngredientePapas >= 1000) {
    let calculoEnKg = calculoDeIngredientePapas / 1000;
    mensajePapas = `${calculoEnKg} kilogramos de papas`;
} else {
    mensajePapas = `${calculoDeIngredientePapas} gramos de papas`;
}

let calculoDeIngredienteHuevos = (comensal * huevos); 
let calculoDeIngredienteCebollas = (comensal * cebollas);

console.log(`${mensajePapas}`);
console.log(`${calculoDeIngredienteHuevos} unidades de huevos`);
console.log(`${calculoDeIngredienteCebollas} gr de cebollas`);

/*Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias
.5 comensales,

Se necesitará:

1 kg de papas

5 huevos

300 gr de cebolla*/