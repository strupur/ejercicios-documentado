// Array de turnos de servicio
const serviceSchedule = [
    { day: 'lunes', person: 'María' },
    { day: 'martes', person: 'Luis' },
    { day: 'miércoles', person: 'Antonia' },
    { day: 'jueves', person: 'Pedro' },
    { day: 'viernes', person: 'Marisa' }
];

// Función para obtener la persona encargada del servicio
function getServicePerson(day) {
    // Convertir el día a minúsculas
    const dayLowerCase = day.toLowerCase();

    // Buscar el día en el array
    const service = serviceSchedule.find(item => item.day === dayLowerCase);

    // Devolver el resultado
    if (service) {
        return `Este día se encarga ${service.person}`;
    } else {
        return 'No hay servicio este día';
    }
}

// Ejemplos de uso
console.log(getServicePerson('Lunes'));       // Este día se encarga María
console.log(getServicePerson('Miércoles'));   // Este día se encarga Antonia
console.log(getServicePerson('Sábado'));      // No hay servicio este día
