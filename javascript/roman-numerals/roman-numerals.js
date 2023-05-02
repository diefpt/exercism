const ROMAN_NUMS = [
  ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90],
  ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];

export const toRoman = num => {
  return ROMAN_NUMS.reduce((acc, [letter, value]) => {
    while(num >= value) {
      acc += letter;
      num -= value;
    }
    return acc;
  }, '');
}