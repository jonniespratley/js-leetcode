/**
 * Create an Emitter class that satisifies the following API:
 * 
const emitter = new Emitter();

// 1. Support subscribing to events.
const sub = emitter.subscribe('event_name', callback);
const sub2 = emitter.subscribe('event_name', callback);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', 'foo', 'bar');

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above
sub.release(); // `sub` is the reference returned by `subscribe` above
 */


class Emitter {
    constructor() {
        this.events = {};
    }

    subscribe(eventName, callback) {
        this.events[eventName] = this.events[eventName] || [];
        const id = this.events[eventName].length + 1;
        this.events[eventName].push({
            id: id,
            fn: callback
        });
        return {
            release: () => {
                for (let i = 0; i < this.events[eventName].length; i++) {
                    if (this.events[eventName][i].id === id) {
                        this.events[eventName].splice(i, 1);
                        break;
                    }
                }
            }
        };
    }

    emit(eventName, ...data) {
        // data = ['foo', 'bar']
        if (this.events[eventName]) {
            this.events[eventName].forEach((obj) => {
                obj.fn(...data);
            });
        }
    }

}


/**
 * 
 * Write a function that takes two objects and returns true if they overlap.
//
//      e1    
// +----------+
// 40         50    
//                   e2 
//                +-----+
//                55   60
//         e3    
//    +----------+
//   45          55

// e1 & e2 do not overlap
// e1 & e3 do overlap
// e2 & e3 do not overlap
does_overlap(e1, e2) -> false
 */

var e1 = {
    start: 40,
    end: 50
};

var e2 = {
    start: 55,
    end: 60
};

var e3 = {
    start: 45,
    end: 55
};

function doesOverlap(e1, e2) {
    if (e1.start > e2.start) {
        [e1, e2] = [e2, e1];
    }
    if (e1.end <= e2.start) {
        return false;
    }
    return true;
}