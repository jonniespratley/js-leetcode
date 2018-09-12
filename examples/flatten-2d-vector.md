
        # flatten-2d-vector.js
        /*
## Flatten 2D Vector

Implement an iterator to flatten a 2d vector.

Example:

```
Input: 2d vector =
[
  [1,2],
  [3],
  [4,5,6]
]
Output: [1,2,3,4,5,6]
```

Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,2,3,4,5,6].

*//**
 * @constructor
 * @param {Integer[][]} vec2d
 *//**
 * @this Vector2D
 * @returns {boolean}
 *//**
 * @this Vector2D
 * @returns {integer}
 *//**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /*
## Flatten 2D Vector

Implement an iterator to flatten a 2d vector.

Example:

```
Input: 2d vector =
[
  [1,2],
  [3],
  [4,5,6]
]
Output: [1,2,3,4,5,6]
```

Explanation: By calling next repeatedly until hasNext returns false, 
             the order of elements returned by next should be: [1,2,3,4,5,6].

*/
/**
 * @constructor
 * @param {Integer[][]} vec2d
 */
var Vector2D = function (vec2d) {
    let list = [];

    function flatten(arr, list) {
        if (arr instanceof Array) {
            for (let i = 0; i < arr.length; i++) {
                flatten(arr[i], list)
            }
        } else {
            list.push(arr);
        }
    }

    flatten(vec2d, list);
    this.list = list;
};


/**
 * @this Vector2D
 * @returns {boolean}
 */
Vector2D.prototype.hasNext = function () {
    return this.list.length > 0;
};

/**
 * @this Vector2D
 * @returns {integer}
 */
Vector2D.prototype.next = function () {
    return this.list.shift();
};

/**
 * Your Vector2D will be called like this:
 * var i = new Vector2D(vec2d), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
var vec2d = [
    [1, 2],
    [3],
    [4, 5, 6]
];
var i = new Vector2D(vec2d),
    a = [];
while (i.hasNext()) a.push(i.next());

console.log(a);
        ```
        
        > Reference: ..
        
        