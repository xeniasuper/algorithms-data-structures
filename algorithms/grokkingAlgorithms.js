// RECURSION

/**
 * Write a recursive function to sum the items in a list.
 * @param arr
 * @return {number}
 */
function sumArr(arr) {
    if (arr.length <= 1) {
        return arr[0] || 0;
    }
    let sum = 0;
    sum += arr[0] + sumArr(arr.slice(1));
    return sum;
}
//console.log(sumArr([1, 2]));

/**
 * Write a recursive function to count the number of items in a list.
 * @param arr
 * @return {number}
 */
function countItems(arr) {
    if (arr.length === 1) {
        return 1;
    } else if (arr.length === 0) {
        return 0;
    }

    let counter = 0;
    counter += 1 + countItems(arr.slice(1));
    return counter;
}

// console.log(countItems([]));

/**
 * Write recursive binary search
 * @param element
 * @param array
 * @return {number}
 */
function recursiveBinarySearch(element, array) {
    let mid = Math.floor(array.length / 2);

    if (element < array[mid]) {
        return recursiveBinarySearch(element, array.slice(0, mid));
    } else if (element > array[mid]) {
        return recursiveBinarySearch(element, array.slice(mid+1));
    } else {
        return mid;
    }

    return -1;
}

// console.log(recursiveBinarySearch(2, [1, 1, 1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9]));