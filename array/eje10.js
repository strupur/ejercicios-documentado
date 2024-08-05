
const products = [
    { name: 'Monitor', price: 200 },
    { name: 'Teclado', price: 20 },
    { name: 'Mouse', price: 10 }
];

function getPrice(name) {
    // Convertir el nombre de entrada a minúsculas
    const minuscula = name.toLowerCase();

    // Buscar el producto, comparando ambos nombres en minúsculas
    const foundProduct = products.find(item => item.name.toLowerCase() === minuscula);

    // Devolver el precio si se encuentra el producto, o un mensaje de no encontrado
    if (foundProduct) {
        return `El precio es ${foundProduct.price}`;
    } else {
        return 'No existe el producto';
    }
}

console.log(getPrice('Monitor'));  // El precio es 200
console.log(getPrice('Teclado'));  // El precio es 20
console.log(getPrice('Mouse'));    // El precio es 10
console.log(getPrice('Altavoz'));  // No existe el producto

