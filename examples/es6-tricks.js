
/*
ES 6 Tricks
*/


const arr = [1,3,5,2,5,4,3];

const uniqueArr = Array.from(new Set(arr));
console.log(uniqueArr);

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait till the promise resolves (*)

  console.log(result); // "done!"
}

f();