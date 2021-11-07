// const a = 0;
//  const b = -57;
//  const c = 7;

// exercicio 1 
// console.log(`resultado da soma de ${a} + ${b} = ${a+b}`);
// console.log(`resultado da soma de ${a} - ${b} = ${a-b}`);
// console.log(`resultado da soma de ${a} * ${b} = ${a*b}`);
// console.log(`resultado da soma de ${a} / ${b} = ${a/b}`);
// console.log(`resultado da soma de ${a} % ${b} = ${a%b}`);

// exercicio 2
// if (a > b ){
//     console.log(a, "maior que ", b);
// }else {
//     console.log(b, "maior que ", a);
// };

// exercicio 3
// if ( a > b && a > c){
//     console.log(a, "maior que ", b, "e ", c );
// }else if ( b > a && b > c) {
//     console.log(b, "maior que ", a, "e ", c);
// }else{
//     console.log(c, "maior que ", a, "e ", b);
// }


// exercicio 4
// if (a > 0){
//     console.log("o número ",a, "é positive");
// }else if(a<0){
//     console.log("o número ",a, "é negative");
// }else{
//     console.log("o número ",a, "é zero");
// }

// 5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo

const a = 80;
const b = 300;
const c = 100;

// let angulos = a + b + c;
// let angulosOk = a > 0 &&  b > 0 &&  c > 0;


    if (a > 0 && b > 0 && c > 0) {
        if (a + b + c === 180 ){
            console.log(true);
        }else if (a + b + c !== 180){
            console.log(false);
        };
    }else {
    console.log("Agulo informado inválo, por favor informe um angulo com valor positivo")
    };


