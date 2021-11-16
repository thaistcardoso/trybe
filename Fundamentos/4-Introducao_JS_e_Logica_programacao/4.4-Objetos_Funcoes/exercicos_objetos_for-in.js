let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// console.log('Boas Vindas', info.personagem)

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente']= 'Sim';
// console.log(info.recorrente);

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console: personagem
// origem
// nota
// recorrente
// for (let desenho in info){
//     console.log(desenho);
// }

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for (let desenho in info){
//     console.log(desenho, info[desenho]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. 
// Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info2 ={
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

// for (let propriedades in info){
//   if (propriedades === 'recorrente' && info[propriedades] === 'Sim' && info2[propriedades] === 'Sim') {
//     console.log('Ambos recorrentes')
//   } else {
//     console.log(info[propriedades] + ' e ' + info2[propriedades]);
//   }
// }


// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
// console.log('O livro favorito de',leitor.nome,leitor.sobrenome, 'se chama',leitor.livrosFavoritos[0].titulo);

// 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
// {
//   titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//   autor: 'JK Rowling',
//   editor: 'Rocco',
// }

leitor.livrosFavoritos.push(
 { 
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  },
);


console.log(leitor.livrosFavoritos[0]);
console.log(leitor.livrosFavoritos[1])

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(leitor.nome,'tem', leitor.livrosFavoritos.length,'livros favoritos');