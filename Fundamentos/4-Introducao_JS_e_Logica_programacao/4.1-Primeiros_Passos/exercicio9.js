const num1 = 7;
const num2 = 5;
const num3 = 55;



// if (num1 % 3 === 1 || num2 % 3 === 1 || num3 % 3 === 1 ){
//     console.log(true);
// }else{
//     console.log(false);
// }

let isOdd = true

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0 ) {
    isOdd = false;
}
console.log(isOdd);