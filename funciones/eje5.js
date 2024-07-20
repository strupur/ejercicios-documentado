function MCD(a, b) {
    for (; b !== 0; ) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(MCD(10, 5));  // Debería devolver 5
console.log(MCD(24, 9));  // Debería devolver 3
console.log(MCD(12, 20)); // Debería devolver 4
console.log(MCD(56, 42)); // Debería devolver 14

// a=56, 𝑏 = 42

// 56 mod 42 = 14 (56 dividido entre 42 da un residuo de 14)

// Ahora, 𝑎 = 42 y 𝑏 = 14

// 42 mod 14 = 0 (42 dividido entre 14 da un residuo de 0)

// Como 𝑏 = 0, el MCD es 14.