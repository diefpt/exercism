export function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach(cardIn => cardIn === card ? count += 1 : count += 0);
  return count;
}

export function determineOddEvenCards(stack, type) {
  let count = 0;
  for (const card of stack) {
    count += type === true ? (card % 2 === 0 ? 1 : 0) : (card % 2 != 0 ? 1 : 0); 
  }
  return count;
}
