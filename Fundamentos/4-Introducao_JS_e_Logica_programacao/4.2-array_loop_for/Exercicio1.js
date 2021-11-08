let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício1
// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i]);
// }

//exercicio2
// let soma = 0;
// for (let i = 0; i < numbers.length; i += 1){
//     soma += numbers[i]; // soma = soma + numbers[i]; 
//     console.log(soma);
// }

// exercicio3

let soma = 0
for (let i = 0; i < numbers.length; i += 0 ){
    soma += numbers[i];
}
let mediaArit = soma / numbers.length;
console.log(mediaArit);