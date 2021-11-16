// Spoiler-alert : para os exercícios do dia, os métodos split , join e reverse podem ser muito úteis.

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindromo(string) {
   let stringReversa = string.split('').reverse().join('');
    if (string === stringReversa) {
       return true;
   } else {
      return false;
   }
}

// console.log(verificaPalindromo('renner'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
