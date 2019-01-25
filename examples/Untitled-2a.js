function longestSubstr(str) {

}
console.log(longestSubstr('hello'));
console.log(longestSubstr('abcabcbb'));

let ans = [];

function getAllCombs(lst, index, tempList) {
  if (index >= lst.length) {
    // console.log(tempList);
    ans.push([...tempList]);
    return;
  }
  for (let i = 0; i < lst[index].length; i++) {
    tempList.push(lst[index][i]);
    getAllCombs(lst, index + 1, tempList);
    tempList.pop();
  }

}

function allCombs(lst) {
  getAllCombs(lst, 0, []);
  console.log(ans);
}
/*
allCombs([
  ['a', 'b'],
  ['c', 'd'],
  ['e']
])

*/

const subsets = function (nums) {
  const res = [
    []
  ];
  if (nums.length === 0 || nums === null) {
    return res;
  }
  const len = nums.length;

  function helper(i, arr = []) {
    for (; i < len; i++) {
      let clone = arr.slice(0);
      clone.push(nums[i]);
      res.push(clone);
      if (i + 1 < len) {
        helper(i + 1, clone);
      }
    }
  }
  helper(0);
  return res;
}
//console.log(subsets(['a', 'b']))








function threeSum(arr, target) {
  arr.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = arr.length - 1;
  let res = [];


  while (p1 < p2) {
    const [n1, n2, n3] = [arr[p1], arr[p1 + 1], arr[p2]];

    console.log(n1, n2, n2);

    if (n1 + n2 === target) {
      res.push([n1, n2]);
    }
    if (n1 + n2 < target) {
      p1++;
    } else {
      p2--;
    }
  }
  return res;
}

function twoSum(arr, target) {
  arr.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = arr.length - 1;
  let res = [];
  while (p1 < p2) {
    const [n1, n2] = [arr[p1], arr[p2]];
    if (n1 + n2 === target) {
      res.push([n1, n2]);
    }
    if (n1 + n2 < target) {
      p1++;
    } else {
      p2--;
    }
  }
  return res;
}
//console.log(threeSum([2, 1, -3, 3]))
//console.log(twoSum([1, 2, 3, 4, 5, 6], 5))
//console.log(threeSum([1, 2, 3, 4, 5, 6], 5))
