const nota = 101;

// switch (nota){
//     case 
// }


if (nota < 0 || nota > 100) {
  console.log("Nota invalida, valor deve ser entre 0% e 100%");
} else if (nota >= 90 ) {
  console.log("Conceito A");
} else if (nota >= 80 ) {
  console.log("Conceito B")
} else if (nota >= 70 ) {
  console.log("Conceito C")        
} else if (nota >=60 ) {
  console.log("Conceito D")
} else if( nota >=50 ) {  
  console.log("Conceito D")
} else{   
  console.log("Conceito F")
}