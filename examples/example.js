/**
 * 
 * @param {Array} list A list of items
 * @param {any} element The value to search for.
 */
function indexSearch(list, element) {
    let currentIndex,
        currentElement,
        minIndex = 0,
        maxIndex = list.length - 1;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor(maxIndex + maxIndex) / 2;
        currentElement = list[currentIndex];
        
        if (currentElement === element) {
            return currentIndex;
        }

        if (currentElement < element) {
            minIndex = currentIndex + 1;
        }

        if (currentElement > element) {
            maxIndex = currentIndex - 1;
        }
    }

    return -1;
}

console.log(indexSearch([2,1,4,8,3,5,6,3,2,1,9], 5))