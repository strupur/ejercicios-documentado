let array = [];

// ESTE FOR GENERA UNA INTERACION DE 1 AL 5 Y LO GUARDA EN UN ARRAY 
//[1,2,3,4,5]

for (let i = 1; i <= 5; i++) {
    array.push(i)
}

// [1,2,3,4,5,6] aqui agregamos un 6 al final
array.push(6); 

// [0,1,2,3,4,5,6] aqui agregamos un 0 al principio
array.unshift(0) 

// [0,1,2,3,5,6] aqui aliminamos el 4 del array
array = array.filter(num => num !== 4); //

console.log(array);