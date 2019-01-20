function bind(func, thisValue, ...boundArgs) {
  return (...args) =>
    func.call(thisValue, ...boundArgs, ...args);
}

/*  My implementation. */
Function.prototype.fbind = function (context) {
  const that = this;
  return function (...args) {
    return that.apply(context, [].slice.apply(args));
  }
}

/*  Valid implementation. */
Function.prototype.fbind2 = function (context) {
  const that = this;
  if (typeof that !== 'function') {
    throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
  }
  return (...args) => {
    return this.apply(context, [].slice.apply(args));
  }
};



const movie = {
  title: 'Elf',
  setTitle: function (t, arg) {
    this.title = `${t} - ${arg}`;
    return this;
  },
  getTitle: function () {
    return this.title;
  }
};

const getNewTitle = movie.getTitle.fbind(this);
const setNewTitle = movie.setTitle.fbind('test');
console.log(setNewTitle(123));
console.log(getNewTitle());

const getNewTitle2 = movie.getTitle.fbind2(this);
const setNewTitle2 = movie.setTitle.fbind2(this, 'test');
console.log(setNewTitle2('test', 456));
console.log(getNewTitle2());


/**
 Netflix Onsite Question 2
 How many ways can you flip

 return x === 1 ? 0 : 1;
 if (x === 1) return 0;
 */
function flip(x) {
  return x === 1 ? 0 : 1;
}
console.assert(!flip(1))
console.assert(flip(0))

function flip2(x) {
  return !x;
}
console.assert(!flip2(1))
console.assert(flip2(0))


console.log(Boolean(0)) // false
console.log(Boolean(1)) // true