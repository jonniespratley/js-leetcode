Need to work on explaining the following topics:

Clean tree

https://en.js.cx/libs/domtree.js



* https://javascript.info/closure#lexical-environment
* https://javascript.info/dom-nodes

## []What is event delegation and benefits?


## []What is event delegation and benefits?
 []What is the difference between Objects and Arrays?

http://javascript.info/array

The difference between Objects and Arrays is:
1. Arrays have a length property and methods for iterating a collection
2.  store ordered collections.
A queue is one of most common uses of an array. In computer science, this means an ordered collection of elements which supports A queue is one of most common uses of an array. In computer science, this means an ordered collection of elements which supports two operations:
push appends an element to the end.
shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

Arrays support both operations.
In practice we meet it very often. For example, a queue of messages that need to be shown on-screen.
There’s another use case for arrays – the data structure named stack.
It supports two operations:
push adds an element to the end.
pop takes an element from the end.
So new elements are added or taken always from the “end”.
A stack is usually illustrated as a pack of cards: new cards are added to the top or taken from the top:

For stacks, the latest pushed item is received first, that’s also called LIFO (Last-In-First-Out) principle. For queues, we have FIFO (First-In-First-Out).

Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements both to/from the beginning or the end.

In computer science the data structure that allows it is called deque.

Methods that work with the end of the array:
pop

Extracts the last element of the array and returns it:
An array-like object is an object that has its keys defined as non-negative integers. It is best to specifically add a length property on the object that has the length of the object, since the a length property does not exist on objects it does on Arrays.

// An array-like object: note the non-negative integers used as keys
var anArrayLikeObj = {
 0:"Martin”, 
 1:78, 
 2:67, 
 3:["Letta", "Marieta", "Pauline"], 
 length:4 
};

// Make a quick copy and save the results in a real array:
// First parameter sets the "this" value
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);

console.log (newArray);  // ["Martin", 78, 67, Array[3]]

[]call and apply, why use and the benefits and differences

The Apply and Call methods are two of the most often used Function methods in JavaScript, and for good reason: they allow us to borrow functions and set the this value in function invocation.

 In addition, the apply function in particular allows us to execute a function with an array of parameters, such that each parameter is passed to the function individually when the function executes—great for variadic functions; a variadic function takes varying number of arguments, not a set number of arguments as most functions do.

Parials - https://javascript.info/currying-partials#going-partial-without-context

function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// Usage:
let user = {
  firstName: "John",
  say(time, phrase) {
    alert(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// add a partial method that says something now by fixing the first argument
user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow("Hello");
// Something like:
// [10:00] John: Hello!

Currying - https://javascript.info/currying-partials#currying

function curry(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let carriedSum = curry(sum);

alert( carriedSum(1)(2) ); // 3




let clientData = {
age: 32,
gender: 'male',
// setUserName is a method on the clientData object
setUserName: function (firstName, lastName) {
// this refers to the fullName property in this object
this.fullName = firstName + " " + lastName;
}
}

function getUserInput(firstName, lastName, callback, callbackObj) {
// The use of the Apply method below will set the "this" value to callbackObj
callback.apply(callbackObj, [firstName, lastName]);
}

getUserInput('jonne', 'spratley', clientData.setUserName, clientData);
console.log(clientData);

function fn() {
console.log(arguments)
}

fn('jonnie', 32, 'male');


console.log(Math.max(23, 11, 34, 56)); // 56

var allNumbers = [23, 11, 34, 56];

// We cannot pass an array of numbers to the the Math.max method like this
console.log(Math.max(allNumbers));

// Using the apply () method, we can pass the array of numbers:
console.log(Math.max.apply(null, allNumbers)); // 56

var students = ["Peter Alexander", "Michael Woodruff", "Judy Archer", "Malcolm Khan"];

// No specific parameters defined, because ANY number of parameters are accepted
function welcomeStudents() {
var args = Array.prototype.slice.call(arguments);
var lastItem = args.pop();
return ("Welcome " + args.join(", ") + ", and " + lastItem + ".");
}

console.log(welcomeStudents.apply(null, students));
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.


[]### What is a closure and what are the benefits?

A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.

You create a closure by adding a function inside another function.

A Basic Example of Closures in JavaScript: 

function showName (firstName, lastName) { 
    var nameIntro = "Your name is ";

    // this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {         
        return nameIntro + firstName + " " + lastName;     
    }

    return makeFullName(); 
} 

showName ("Michael", "Jackson"); // Your name is Michael Jackson 




[]## Big O notion of functions
Take the following examples and identify the big-O;