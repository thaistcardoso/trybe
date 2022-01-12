// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'morango', 'banana', 'kiwi', 'laranja', 'melancia', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leiteCondensado', 'granola', 'cremeDeLeite'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));