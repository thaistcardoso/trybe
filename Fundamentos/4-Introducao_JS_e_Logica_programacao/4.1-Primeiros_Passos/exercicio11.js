const salBruto = 5000;
let desInss = 0; 
let desIr = 0;
let salBase = 0;
let salLiq = 0;


if (salBruto <= 1556.94) {
  desInss = salBruto * 0.08;    
}else if (salBruto <= 2594.92){
  desInss = salBruto * 0.09;
} else if (salBruto <= 5189.82) {
  desInss = salBruto * 0.11;
} else if (salBruto > 5189.82){
  desInss = 570.88; 
}

salBase = salBruto - desInss;

if (salBase <= 1903.98){
  desIr = 0;
}else if (salBase <= 2826.65){
  desIr = (salBase * 0.075) - 142.80;
}else if (salBase <= 3751.05){
  desIr = (salBase * 0.15) - 354.80
}else if (salBase <= 4664.68){
  desIr = (salBase * 0.225) - 636.13;
}else if (salBase > 4664.68){
  desIr = (salBase * 0.275) - 869.36
}

salLiq = salBase - desIr;
console.log("Seu salário bruto informado foi de R$" + salBruto + " e seu salário Líquido a receber é R$" + salLiq);