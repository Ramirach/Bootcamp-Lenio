// 1)
// Crear una función que tome una palabra y determine si empieza con 'G' (Mayúscula)
const startsWithG = (word) => word.startsWith('G');
console.log(startsWithG('Avocado'));
// 2)
// Crear una función que toma un arreglo de nombres y devuelva otro sólo con lo que empiezan con G
// Usar la función startsWithG
const namesWithG = (names) => names.filter(startsWithG);
console.log(namesWithG(['Barbara', 'Cristian', 'Gino', 'Isadora', 'Joaquín', 'Manuel', 'Ramiro']));


// 3)
// Crear una función que tome un número y devuelva su valor absoluto
const valorAbsoluto = (num) => Math.abs(num);

console.log(valorAbsoluto(1), valorAbsoluto(-6), valorAbsoluto(0));



// 4)
// Crear una función que tome un arreglo de números y devuelva su valor absoluto
const valoresAbs = (numbers) => numbers.map(number => valorAbsoluto(number));

console.log(valoresAbs( [-1, 6, 0]));

// Extra
// Crear una función que tome un arreglo de números y devuelva su suma
const sum = (numbers) => numbers.reduce((suma, number) => suma + number);
console.log(sum([3, 4, 5]));

// Ahora hacer lo mismo pero sin usar ningúna otra función o sentencia
// Ni reduce, ni forEach, ni for
const sumNoFunctions = (numbers) => {
    let suma = 0;
    const longitud = numbers.length;
    let posicion = 0;
    while (posicion < longitud) {
        suma = numbers[posicion] + suma;
        posicion++;
    };
    return suma;

}
console.log(sumNoFunctions([3, 4 ,5]));
