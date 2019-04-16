// TWO POINTERS TECHNIQUE

/**
 * Given a sorted array A (sorted in ascending order), having N integers,
 * find if there exists any pair of elements (A[i], A[j])
 * such that their sum is equal to X.
 */
function sumOfPair(array, sum) {
    let leftmost = 0;
    let rightmost = array.length-1;

    while (leftmost < rightmost) {
        let sumElements = array[leftmost] + array[rightmost];

        if (sumElements < sum) {
            leftmost++;
        } else if (sumElements > sum) {
            rightmost--;
        } else {
            return true;
        }
    }
    return false;
}
// console.log(sumOfPair([1, 4, 7, 9, 10], 5));

// Given two sorted arrays and a number x,
// find the pair whose sum is
// closest to x and the pair has an element from each array.

function closestSum(array1, array2, num) {
    let closest = Math.abs(-Infinity + num);
    let elements = [];

    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            let sumElements = array1[i] + array2[j];
            let absDiff = Math.abs(num - sumElements);

            if (absDiff < closest) {
                closest = absDiff;
                elements = [array1[i], array2[j]];
            }
        }
    }
    return elements;
}
// console.log(closestSum([-20, 4, 5, 7], [10, 20, 30, 40], 31));

/**
 * Given a sorted array and a number x,
 * find a pair in array whose sum is closest to x.
 * @param sorted
 * @param num
 * @return {*|*[]}
 */
function closestSum2(sorted, num) {
    let leftmost = 0;
    let rightmost = num;
    let closest = Infinity;
    let elements;

    while (leftmost < rightmost) {
        let sum = leftmost + rightmost;
        let diff = Math.abs(num - sum);

        if (diff < closest) {
            closest = diff;
            elements = [sorted[leftmost], sorted[rightmost]];
        } else {
            leftmost++;
            rightmost--;
        }
    }
    return elements;
}
// console.log(closestSum([1, 2, 5, 30, 40], [-20, 6, 3], 31));

// Given an array and a value,
// find if there is a triplet in array whose sum is equal to the given value.
function tripletSum(array, value) {
    let sorted = [...array].sort((num1, num2) => num1 - num2);

    for (let i = 0; i < sorted.length; i++) {
        let leftmost = i + 1;
        let rightmost = sorted.length-1;

        while(leftmost < rightmost) {
            let [first, second, third] = [sorted[i], sorted[leftmost], sorted[rightmost]];
            let sumElements = first + second + third;

            if (sumElements === value) {
                return [first, second, third];
            } else if (sumElements < value) {
                leftmost++;
            } else {
                rightmost--;
            }
        }
    }
    return false;
}
// console.log(tripletSum([1, 2, 3, 6, 7, 10, 13], 20));