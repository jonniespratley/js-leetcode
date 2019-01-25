
//
//const { PerformanceObserver, performance } = require('perf_hooks');


function lcs(str1, str2) {
  let str = '';
  let max = 0;
  let index = 0;

  //Build the char table
  let dict = new Array(str1.length + 1);
  for (var i = 0; i <= str1.length + 1; ++i) {
    dict[i] = new Array(str2.length + 1);
    for (var j = 0; j <= str2.length + 1; ++j) {
      dict[i][j] = 0;
    }
  }
  /*
  [...str1].forEach((char, i) => {
    dict[i] = new Array(str2.length + 1);
    [...str2].forEach((char, j) => {
      dict[i][j] = 0;
    })
  });
  */

  //Build the char table matches
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (i === 0 || j === 0) {
        dict[i][j] = 0;
      } else {

        //Match previous char
        if (str1[i - 1] == str2[j - 1]) {
          console.log('Found match', i, j);
          dict[i][j] = dict[i - 1][j - 1] + 1;
        } else {
          dict[i][j] = 0;
        }
      }
      if (max < dict[i][j]) {
        max = dict[i][j];
        index = i;
      }
    }
  }

  //Process results
  if (max === 0) {
    return '';
  } else {
    for (let i = index - max; i < max; i++) {
      str += str2[i];
    }
  }


  console.log(dict);
  return str;
}

//console.log(lcs('abbcc', 'dbbcc'));
//console.log(lcs('bacdb', 'bdcb'));

let word1 = 'abbcc';
let word2 = 'dbbcc';
/*
var lcsarr = new Array(word1.length);

console.log(lcsarr); // bbcc
*/


/**
 * Find the min and max numbers
 *
 * @param {*} nums
 */
function minMax(nums) {
  let min = nums[1];
  let max = nums[1];

  nums.forEach((num, i) => {
    if (num > max) {
      max = num
    } else if (num < min) {
      min = num;
    }
  });

  return {
    min,
    max
  };
}
console.log(minMax([4, 2, 1, 23, 6, 3, 8, 9]))

function minMax2(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  return {
    min,
    max
  };
}
console.log(minMax2([4, 2, 1, 23, 6, 3, 8, 9]))


var nums = [];
for (var i = 0; i < 10; i++) {
  nums.push(i);
}
console.log(nums.length, nums);

nums = [];
for (var i = 10; i > 0; i--) {
  nums.push(i);
}
console.log(nums.length, nums);
