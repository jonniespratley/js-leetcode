
        # randomized-set.js
        /*
## Insert Delete GetRandom O(1)
Design a data structure that supports all following operations in average O(1) time.

- insert(val): Inserts an item val to the set if not already present.
- remove(val): Removes an item val from the set if present.
- getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
*//**
 * Initialize your data structure here.
 *//**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 *//**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 *//**
 * Get a random element from the set.
 * @return {number}
 *//**
 * Initialize your data structure here.
 *//**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 *//**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */undefined/**
 * Get a random element from the set.
 * @return {number}
 *//** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */undefinedundefinedundefinedundefinedundefinedundefinedundefinedundefined
        
        **Solution:**
        
        <!-- js-console -->
        ```javascript
            /*
## Insert Delete GetRandom O(1)
Design a data structure that supports all following operations in average O(1) time.

- insert(val): Inserts an item val to the set if not already present.
- remove(val): Removes an item val from the set if present.
- getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.count = 0;
    this.store = new Map();
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.store.has(val)){
        this.count++;
        this.store.set(val, val);
        return true;
    }
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.store.has(val)){
        this.count--;
        return this.store.delete(val);
    }
    return false;
    
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.store.get(random(this.count));
    function random(l) {
        return Math.floor((Math.random() * l));
    }
};



/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = {};
    this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.hasOwnProperty(val)) return false;
    this.map[val] = this.arr.length;
    this.arr.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.hasOwnProperty(val)) return false;
    let index = this.map[val];
    if(index < this.arr.length - 1) {
        // not the last element, swap with the last element.
        let lastElement = this.arr[this.arr.length - 1];
        this.arr[index] = lastElement;
        this.map[lastElement] = index;
    }
    delete this.map[val];
    this.arr.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const max = this.arr.length;
    return this.arr[Math.floor(Math.random() * max)]
};


/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// Init an empty set.
var randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.assert(randomSet.insert(1));
console.assert(!randomSet.insert(1));

// Returns false as 2 does not exist in the set.
console.assert(!randomSet.remove(2));

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.assert(randomSet.insert(2));

// getRandom should return either 1 or 2 randomly.
console.log(randomSet.getRandom());
console.log(randomSet.getRandom());

console.log(randomSet);

// Removes 1 from the set, returns true. Set now contains [2].
console.assert(randomSet.remove(1));

// 2 was already in the set, so return false.
console.assert(!randomSet.insert(2));

// Since 2 is the only number in the set, getRandom always return 2.
console.log(randomSet.getRandom());


let rand2 = new RandomizedSet();
console.log(rand2.remove(0));
console.log(rand2.remove(0));
console.log(rand2.insert(0));
console.log(rand2.getRandom(0));
console.log(rand2.remove(0));
console.log(rand2.insert(0));
        ```
        
        > Reference: ..
        
        