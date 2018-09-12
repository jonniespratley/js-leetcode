
        # big-o.js
        /**
@description
## Big-O Analysis

Big-O analysis is a form of runtime analysis that measures the efficiency of an algorithm in terms of the time it takes for the algorithm to run as a function of the input size. It’s not a formal benchmark, just a simple way to classify algorithms by relative efficiency when dealing with very large input sizes.
How Big-O Analysis Works

In Big-O analysis, input size is assumed to be an unknown value n. In this example, n simply represents the number of elements in an array. In other problems, n may represent the number of nodes in a linked list, the number of bits in a data type, or the number of entries in a hash table. After determining what n means in terms of the input, you must determine how many operations are performed for each of the n input items. “Operation” is a fuzzy word because algorithms differ greatly.
Commonly, an operation is something that a real computer can do in a constant amount of time, like adding an input value to a constant, creating a new input item, or deleting an input value. In Big-O analysis, the times for these operations are all considered equivalent.

- In both `CompareToMax` and `CompareToAll`, the operation of greatest interest is comparing an array value to another value.

- In `CompareToMax`, each array element was compared once to a maximum value. Thus, the n input items are each examined once, resulting in n examinations. 
This is considered O(n), usually referred to as linear time: The time required to run the algorithm increases linearly with the number of input items.
How to Do Big-O Analysis

The general procedure for Big-O runtime analysis is as follows:

1. Figure out what the input is and what n represents.
2. Express the number of operations the algorithm performs in terms of n.
3. Eliminate all but the highest-order terms.
4. Remove all constant factors.

For the algorithms you’ll encounter in interviews, Big-O analysis should be straightforward as long as you correctly identify the operations that are dependent on the input size.
Which is Better?

The performance of most algorithms depends on n, the size of the input. The algorithms can be classified as follows from best-to-worse performance:

* O(log n) — An algorithm is said to be logarithmic if its running time increases logarithmically in proportion to the input size.
* O(n) — A linear algorithm’s running time increases in direct proportion to the input size.
* O(n log n) — A superlinear algorithm is midway between a linear algorithm and a polynomial algorithm.
* O(nc) — A polynomial algorithm grows quickly based on the size of the input.
* O(cn) — An exponential algorithm grows even faster than a polynomial algorithm.
* O(n!) — A factorial algorithm grows the fastest and becomes quickly unusable for even small values of n.

The run times of different orders of algorithms separate rapidly as n gets larger. 

Consider the run time for each of these algorithm classes with n = 10:

* log 10 = 1
* 10 = 10
* 10 log 10 = 10
* 102 = 100
* 210= 1,024
* 10! = 3,628,800

Now double it to n = 20:

* log 20 = 1.30
* 20 = 20
* 20 log 20= 26.02
* 202 = 400
* 220 = 1,048,576
* 20! = 2.43×1018

Notation      - Name
O(1)          - Constant
O(log(n))     - Logarithmic
O((log(n))c)  - Poly-logarithmic
O(n)          - Linear
O(n2)         - Quadratic
O(nc)         - Polynomial
O(cn)         - Exponential


### [] O(1)

Consider the following function:

function increment(num){ 
  return ++num; 
}

[]O(N)

Now, let's use the sequential search algorithm:

function sequentialSearch(array, item){ 
  for (var i=0; i<array.length; i++){ 
    if (item === array[i]){ //{1} 
      return i; 
    } 
  } 
  return -1; 
}

[]O(N2)
For the O(n2) example, let's use the bubble sort algorithm:

function swap(array, index1, index2){ 
  var aux = array[index1]; 
  array[index1] = array[index2]; 
  array[index2] = aux; 
} 
 
function bubbleSort(array){ 
  var length = array.length; 
  for (var i=0; i<length; i++){    //{1} 
    for (var j=0; j<length-1; j++ ){ //{2} 
      if (array[j] > array[j+1]){ 
        swap(array, j, j+1); 
      } 
    } 
  } 
}

*/undefined/**
 * Sequential search example
 * @param {Array} array The array of items
 * @param {any} item The item to search for
 */undefinedundefinedundefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /**
@description
## Big-O Analysis

Big-O analysis is a form of runtime analysis that measures the efficiency of an algorithm in terms of the time it takes for the algorithm to run as a function of the input size. It’s not a formal benchmark, just a simple way to classify algorithms by relative efficiency when dealing with very large input sizes.
How Big-O Analysis Works

In Big-O analysis, input size is assumed to be an unknown value n. In this example, n simply represents the number of elements in an array. In other problems, n may represent the number of nodes in a linked list, the number of bits in a data type, or the number of entries in a hash table. After determining what n means in terms of the input, you must determine how many operations are performed for each of the n input items. “Operation” is a fuzzy word because algorithms differ greatly.
Commonly, an operation is something that a real computer can do in a constant amount of time, like adding an input value to a constant, creating a new input item, or deleting an input value. In Big-O analysis, the times for these operations are all considered equivalent.

- In both `CompareToMax` and `CompareToAll`, the operation of greatest interest is comparing an array value to another value.

- In `CompareToMax`, each array element was compared once to a maximum value. Thus, the n input items are each examined once, resulting in n examinations. 
This is considered O(n), usually referred to as linear time: The time required to run the algorithm increases linearly with the number of input items.
How to Do Big-O Analysis

The general procedure for Big-O runtime analysis is as follows:

1. Figure out what the input is and what n represents.
2. Express the number of operations the algorithm performs in terms of n.
3. Eliminate all but the highest-order terms.
4. Remove all constant factors.

For the algorithms you’ll encounter in interviews, Big-O analysis should be straightforward as long as you correctly identify the operations that are dependent on the input size.
Which is Better?

The performance of most algorithms depends on n, the size of the input. The algorithms can be classified as follows from best-to-worse performance:

* O(log n) — An algorithm is said to be logarithmic if its running time increases logarithmically in proportion to the input size.
* O(n) — A linear algorithm’s running time increases in direct proportion to the input size.
* O(n log n) — A superlinear algorithm is midway between a linear algorithm and a polynomial algorithm.
* O(nc) — A polynomial algorithm grows quickly based on the size of the input.
* O(cn) — An exponential algorithm grows even faster than a polynomial algorithm.
* O(n!) — A factorial algorithm grows the fastest and becomes quickly unusable for even small values of n.

The run times of different orders of algorithms separate rapidly as n gets larger. 

Consider the run time for each of these algorithm classes with n = 10:

* log 10 = 1
* 10 = 10
* 10 log 10 = 10
* 102 = 100
* 210= 1,024
* 10! = 3,628,800

Now double it to n = 20:

* log 20 = 1.30
* 20 = 20
* 20 log 20= 26.02
* 202 = 400
* 220 = 1,048,576
* 20! = 2.43×1018

Notation      - Name
O(1)          - Constant
O(log(n))     - Logarithmic
O((log(n))c)  - Poly-logarithmic
O(n)          - Linear
O(n2)         - Quadratic
O(nc)         - Polynomial
O(cn)         - Exponential


### [] O(1)

Consider the following function:

function increment(num){ 
  return ++num; 
}

[]O(N)

Now, let's use the sequential search algorithm:

function sequentialSearch(array, item){ 
  for (var i=0; i<array.length; i++){ 
    if (item === array[i]){ //{1} 
      return i; 
    } 
  } 
  return -1; 
}

[]O(N2)
For the O(n2) example, let's use the bubble sort algorithm:

function swap(array, index1, index2){ 
  var aux = array[index1]; 
  array[index1] = array[index2]; 
  array[index2] = aux; 
} 
 
function bubbleSort(array){ 
  var length = array.length; 
  for (var i=0; i<length; i++){    //{1} 
    for (var j=0; j<length-1; j++ ){ //{2} 
      if (array[j] > array[j+1]){ 
        swap(array, j, j+1); 
      } 
    } 
  } 
}

*/

// O(1)
function increment(num) {
    return ++num;
}
console.log(increment(2));


/**
 * Sequential search example
 * @param {Array} array The array of items
 * @param {any} item The item to search for
 */
function sequentialSearch(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (item === array[i]) { //{1} 
            return i;
        }
    }
    return -1;
}

let input1 = [9, 5, 2, 4, 3, 7, 6];

console.log(sequentialSearch(input1, 4));



// O(n^2)
function swap(array, index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
}

function bubbleSort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) { //{1} 
        for (let j = 0; j < length - 1; j++) { //{2} 
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
}
console.log(bubbleSort(input1));
        ```
        
        > Reference: ..
        
        