// Este código recorre todas las propiedades del objeto libro y imprime tanto la clave (nombre de la propiedad) como el valor correspondiente a cada propiedad.

let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    añoPublicacion: 1967,
    genero: "Novela"
};

for (let propiedad in libro) {
    console.log(`${propiedad}: ${libro[propiedad]}`);
}
console.log(libro.autor);  // Esto imprimirá: Gabriel García Márquez

// ========================================================================================

// Este otro codigo Accede directamente a la propiedad 'autor' del objeto 'libro'

 let libro2 = {
     titulo: "Cien años de gatito",
     autor: "Jose Garcia",
     añoPublicacion: 1956,
     genero: "Novela"
 };

 console.log(libro.autor);  // Esto imprimirá: Gabriel García Márquez

// Este cogido extrae los elemento dentro del array los enumera y nos dice el total de elemento que existen desntro de array

const nombres = ['Ana', 'Juan', 'Sofía', 'Carlos','javierito'];

nombres.forEach((nombre, index, array) => {
     console.log(`${index + 1}. ${nombre} (Total: ${array.length})`);
 });
