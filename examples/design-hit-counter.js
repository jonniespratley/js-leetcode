/*
## Design Hit Counter

Design a hit counter which counts the number of hits received in the past 5 minutes.

Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.

It is possible that several hits arrive roughly at the same time.

Example:

```
const counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
counter.hit(3);

// get hits at timestamp 4, should return 3.
counter.getHits(4);

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
counter.getHits(300);

// get hits at timestamp 301, should return 3.
counter.getHits(301); 
```

Follow up:
- What if the number of hits per second could be very large? Does your design scale?
*/
/**
 * Initialize your data structure here.
 */
var HitCounter = function () {
    this.map = new Map();
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
    if (!this.map.has(timestamp)) {
        this.map.set(timestamp, 0);
    }
    return this.map.set(timestamp, this.map.get(timestamp) + 1);
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
    let count = 0;
    let bound = Math.max(1, timestamp - 300 + 1);
    for (let i = timestamp; i >= bound; i--) {
        if (this.map.has(i)) {
            count += this.map.get(i);
        }
    }
    return count;
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = Object.create(HitCounter).createNew()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
const counter = new HitCounter();

// hit at timestamp 1.
counter.hit(1);

// hit at timestamp 2.
counter.hit(2);

// hit at timestamp 3.
console.log(counter.hit(3));

// get hits at timestamp 4, should return 3.
console.log(counter.getHits(4));

// hit at timestamp 300.
counter.hit(300);

// get hits at timestamp 300, should return 4.
console.log(counter.getHits(300));

// get hits at timestamp 301, should return 3.
console.log(counter.getHits(301));
