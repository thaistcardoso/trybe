const sum = require('./sum'); // importa a função sum 

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});