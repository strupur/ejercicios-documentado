var personas = [
    { nombre: "Leonel", apellido: "Guitierrez", idPersona: 945 },
    { nombre: "Alessandro", apellido: "Herrera", idPersona: 196 },
    { nombre: "Isis", apellido: "Zegers", idPersona: 336 },
    { nombre: "Claudio", apellido: "Cisternas", idPersona: 654 },
    { nombre: "Juan", apellido: "Muñoz", idPersona: 753 }
];

var ciudades = [
    { idPersona: 654, ciudad: "Limache", region: "Valparaiso" },
    { idPersona: 336, ciudad: "Buin", region: "Metropolitana" },
    { idPersona: 196, ciudad: "Rancagua", region: "O'Higgins" },
    { idPersona: 753, ciudad: "La Tirana", region: "Tarapaca" },
    { idPersona: 945, ciudad: "Viña del Mar", region: "Valparaiso" }
];

console.log("Tarea 1: Mostrar la información de cada persona");
personas.forEach(persona => {
    const ciudadInfo = ciudades.find(c => c.idPersona === persona.idPersona);
    if (ciudadInfo) {
        console.log(`${persona.nombre} ${persona.apellido} vive en ${ciudadInfo.ciudad}, ${ciudadInfo.region}`);
    } else {
        console.log(`${persona.nombre} ${persona.apellido} no tiene información de ciudad.`);
    }
});

console.log(`<=========================== & ===========================> `);


console.log(`Tarea 2: Mostrar información de personas que viven en la región de Valparaíso`);
 
console.log("Personas que viven en la región de Valparaíso:");
personas.forEach(persona => {
    const ciudadInfo = ciudades.find(c => c.idPersona === persona.idPersona && c.region === "Valparaiso");
    if (ciudadInfo) {
        console.log(`${persona.nombre} ${persona.apellido} vive en ${ciudadInfo.ciudad}, ${ciudadInfo.region}`);
    }
});

// Imprimira:

// Tarea 1: Mostrar la información de cada persona
// ejercicio.js:21 Leonel Guitierrez vive en Viña del Mar, Valparaiso
// ejercicio.js:21 Alessandro Herrera vive en Rancagua, O'Higgins
// ejercicio.js:21 Isis Zegers vive en Buin, Metropolitana
// ejercicio.js:21 Claudio Cisternas vive en Limache, Valparaiso
// ejercicio.js:21 Juan Muñoz vive en La Tirana, Tarapaca

// ejercicio.js:27 <=========================== & ===========================> 

// ejercicio.js:30 Tarea 2: Mostrar información de personas que viven en la región de Valparaíso
// ejercicio.js:32 Personas que viven en la región de Valparaíso:
// ejercicio.js:36 Leonel Guitierrez vive en Viña del Mar, Valparaiso
// ejercicio.js:36 Claudio Cisternas vive en Limache, Valparaiso

// Descripcion del ejercicio:

// Aquí tienes una tarea que requiere el uso de 2 bucles: for o forEach.

// Aquí tienes dos arreglos: uno que contiene un listado de personas y otro que contiene las ciudades donde viven estas personas. Debes determinar cuál es el identificador que los relaciona para llevar a cabo las siguientes tareas:

// Tarea 1: Mostrar el nombre, apellido, ciudad y región de cada persona.
// Tarea 2: Mostrar el nombre, apellido, ciudad y región de las personas que viven en la región de Valparaíso.
// me puede ayudar con este ejercicio