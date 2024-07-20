// < ?========= metodo filter =========>

// [0,1,2,3,,5,6] aqui aliminamos el 4 del array
array = array.filter(num => num !== 4); //

// Array de números
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtrar números pares
let pares = numeros.filter(num => num % 2 === 0);

console.log(pares); // Output: [2, 4, 6, 8, 10]

// ---------------------------

// Array de productos

const products = [
    { name: 'Camiseta', size: 'M', brand: 'Adidas' },
    { name: 'Pantalones', size: 'L', brand: 'Nike' },
    { name: 'Zapatos', size: '42', brand: 'Adidas' },
    { name: 'Gorra', size: 'Única', brand: 'Puma' },
    { name: 'Sudadera', size: 'S', brand: 'Adidas' }
];

// Filtrar productos que tengan la marca 'Adidas'
const adidasProducts = products.filter(product => product.brand === 'Adidas');

console.log(JSON.stringify(adidasProducts));

// [{"name":"Camiseta","size":"M","brand":"Adidas"},{"name":"Zapatos","size":"42","brand":"Adidas"},{"name":"Sudadera","size":"S","brand":"Adidas"}]
