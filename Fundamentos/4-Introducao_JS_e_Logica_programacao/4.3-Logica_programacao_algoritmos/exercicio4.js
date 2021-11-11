// 4- Depois, faça uma pirâmide com n asteriscos de base:
// Copiar
// n = 5

//   *
//  ***
// *****

let n =5;
let asterisco = '*';
let line = '';
posicao = n;

for (let i = 0; i < n; i += 1){
    for(let coluna = 0; coluna < n; coluna += 1){
        if(coluna < posicao){
            line = line + ' ';
        }else{
            line = line + asterisco;
        }

    }
    console.log(line)
    line = '';
    posicao -= 2;
}
