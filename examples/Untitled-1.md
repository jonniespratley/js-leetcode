
        # Untitled-1.js
        /**
 * @param {string} str
 * @return {number}
 */undefinedundefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const match = str.match(/^ *([+-]{0,1}[0-9]+)/);
    return match ? Math.min(2147483647, Math.max(-2147483648, match[1])) : 0;
};

var myAtoi2 = function(str) { 
  const match = str.match(/^ *([+-]{0,1}[0-9]+)/);
  return match ? Math.min(2147483647, Math.max(-2147483648, match[1])) : 0;
};

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(myAtoi("42"));
console.log(myAtoi("    -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));


const CircularQueue = function(items) {
  this.items = [items];

  this.nextIndex = 0;

  return {
    getAll: () => this.items,

    add: (item) => {
      this.items.push(item);
      return this;
    },

    nextElement: () => {
      const element = this.items[this.nextIndex];

      if (this.nextIndex === this.items.length - 1) {
        this.nextIndex = 0; // back to begins
      } else {
        this.nextIndex = this.nextIndex + 1;
      }

      return element;
    }
  };
};

const q = new CircularQueue(4);
q.add(1);


console.log(q.getAll());
console.log(q);

const foo = function () { 
  console.log('foo');
}

const MyClass = function () { 
  this.foo = foo;
}

const MyOtherClass = function () { 

}

MyOtherClass.prototype.bar = function () { 

}

const myInstance = new MyOtherClass();

console.log(MyClass);
console.log(myInstance);
console.log(myInstance.__proto__);



const parent = function (){
  const a = 'Hi!';

  const foo = function() {
      console.log(a);
  }
  foo();
}

parent();

function deepIterator(arr, callback) {
  if (arr instanceof Array) {
      for (let i = 0; i < arr.length; i++) {
          deepIterator(arr[i], callback);
      }
  } else {
      callback(arr);
  }
  
  
}
function flattenArray(arr) {
  // Logic
  let result = [];

  deepIterator(arr, (item) => {
      result.push(item);
  });

  // logic
  return result;
}
console.log(flattenArray([[1, 3, 5], [4, 7, 3], [[2, 3], 4]]))
        ```
        
        > Reference: ..
        
        