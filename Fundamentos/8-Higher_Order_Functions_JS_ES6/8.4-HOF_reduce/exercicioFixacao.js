const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Para fixar ainda mais conceito de reduce , faça uma função que some todos os números pares do array:

const numeroPar = (number) => number % 2 === 0;
const somaPar = (currentValue, number) => currentValue + number;

const somaNumeros = (array) => array.filter(numeroPar).reduce(somaPar);
console.log(somaNumeros(numbers)); // 152

