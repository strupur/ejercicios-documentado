// < ?========= metodo map =========>

    const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ---------------------------

const numbers1 = [1, 2, 3, 4, 5];
const parejas = numbers1.map(num => [num,num]);

console.log(JSON.stringify(parejas));//[[1,1],[2,2],[3,3],[4,4],[5,5]]
