const custoProd = 1.5;
const valVenda = 3.5;

let lucroUnit = valVenda-(custoProd *0.2);

if (custoProd < 0 || valVenda < 0) {
    console.log("Erro! Valor de custo ou venda não pode ser zero");
} else {
    console.log("Esse é o valor em lucro de mil unidades R$",lucroUnit*1000,",00")}