let s = 'aba';
let count = 10;


let letters = s.repeat(10).slice(0, 10).split('').reduce((sum, char) => {
  console.log(char);
  sum += (char === 'a' ? 1 : 0);
  return sum;
}, 0)
console.log(letters);

console.log([...s])