/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  let count = 0;
  let len = S.length;

  for (let i = 0; i < J.length; i++) {
    let char = J.charAt(i);
    if (S.includes(J.charAt(i))) {
      count++;
    }
  }
  return count;
};

var numJewelsInStones = (J, S) => S.split('').filter(char => J.indexOf(char) !== -1).length;

/**
1. Keep track of the count.
2. For each J (jewel) check if it is in the stone.
*/

console.log(numJewelsInStones('aA', 'aAAbbbbb'));
//console.log(numJewelsInStones('z', 'ZZ'));