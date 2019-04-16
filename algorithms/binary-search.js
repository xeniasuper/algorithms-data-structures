"use strict";

// BINARY SEARCH
/**
 * Binary search implementation
 * @param {array} sortedArray
 * @param {number} value
 * @return {number} - index of the value, If the value is not found, return -1
 */
function binarySearch(sortedArray, value) {
    let min = 0;
    let max = sortedArray[sortedArray.length - 1];
    let mid = Math.floor((max - min) / 2);

    while (min < max) {
        mid = Math.floor((max - min) / 2);
        let guess = sortedArray[mid];

        if (guess === value) {
            return mid;
        }
        if (guess < value) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }

    return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));


