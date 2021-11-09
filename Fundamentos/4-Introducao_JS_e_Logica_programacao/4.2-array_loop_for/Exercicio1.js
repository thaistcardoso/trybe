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

// let soma = 0
// for (let i = 0; i < numbers.length; i += 1 ){
//     soma += numbers[i];
// }
// let mediaArit = soma / numbers.length;
// console.log(mediaArit);

// exercicio4
// if ( mediaArit > 20){
//     console.log("Valor maior que 20");
// }else {
//     console.log("valor menor ou igual a 20");
// }

// exercicio5
// let maior = numbers[0];

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] > maior) {
//         maior = numbers[i];
//     }
// }
// console.log(maior);

// exercicio 6
let impares = 0


for (let i =0; i < numbers.length; i += 1){
    if (numbers[i]%2 !== 0){
        impares += 1;
    }
}
if (impares === 0 ){
    console.log("Nenhum valor ímpar encontrado")
}else {
    console.log(impares);
}

//exercicio 7
// let menor = numbers[0];

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] < menor) {
//         menor = numbers[i];
//     }
// }
// console.log(menor);

//exercicio 8
// let array = [];

// for (i = 1; i < 26; i += 1){
//     array.push(i);
// }
// for (i = 0; i <array.length; i += 1){
//     console.log(array[i]);
// }

// exercicio9

// for (i = 0; i <array.length; i += 1){
//     let mod2 = array[i]%2;
//     console.log(mod2);
// }
// teste
