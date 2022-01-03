// const sum = (number1, number2) => {
//   return number1 + number2;
// };

// const sayHello = () => {
//   return ('hello trybers');
// }

// const printGreeting = (callback) => {
//     console.log(callback());
// }

// printGreeting(sayHello);

const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));