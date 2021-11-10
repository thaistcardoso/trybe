// 3- Agora inverta o lado do triângulo. Por exemplo:
// Copiar
// n = 5

//     *
//    **
//   ***
//  ****
// *****
// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.

let n =5;
let asterisco = '*';
let line = '';
let posicao = n;

for (let i = 0; i < n; i += 1){
    for (let coluna = 0; coluna <= n; coluna += 1){
        if (coluna < posicao){
            line = line + ' '  ;
        }else {
            line = line + asterisco;
        };

    };

console.log(line);
line = '';
posicao -= 1; 
};