// QUICK SORT
function getRandomIdx(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function quickSort(array) {
    if (array.length < 2) {
        return array;
    }
    let randomIdx = getRandomIdx(0, array.length-1);
    let pivot = array[randomIdx];

    let lessThanPivot = array.filter(elem => elem < pivot);
    let equalToPivot = array.filter(elem => elem === pivot);
    let greaterThanPivot = array.filter(elem => elem > pivot);

    return [...quickSort(lessThanPivot),
            ...equalToPivot,
            ...quickSort(greaterThanPivot)];
}
// console.log(quickSort([2, -1, 4, 7, 9, -1, 8, 10, 11, 12].reverse()));

// INSERTION SORT
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i-1;

        while(j >= 0 && array[j] > key) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = key;
    }
    return array;
}

// console.log(insertionSort([2, -1, 4, 7, 9, -1, 8, 10, 11, 12].reverse()));


// BUBBLE SORT
function bubbleSort(array) {
    let notSortedCnt = array.length-1;

    while(notSortedCnt) {
        notSortedCnt = array.length-1;

        for (let i = 0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]];
            } else {
                notSortedCnt--;
            }
        }
    }
    return array;
}

// console.log(bubbleSort([2, 4, 7, 9, 8, 10, 11, 12].reverse()));

// MERGE SORT
function merge(array1, array2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            merged.push(array1[i]);
            i++;
        } else if (array1[i] === array2[j]) {
            merged.push(array1[i]);
            merged.push(array2[j]);
            i++;
            j++;
        } else {
            merged.push(array2[j]);
            j++;
        }
    }

    return [...merged, ...array1.slice(i), ...array2.slice(j)];
}
// console.log(merge([4, 5, 6], [1, 9, 11]));

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
    let mid = Math.floor(array.length / 2);

    return merge(mergeSort(array.slice(0, mid)),
                 mergeSort(array.slice(mid)));
}
// console.log(mergeSort([2, 7, 4, 9, -4, 7, 9, 0, -5, 8, 7]));

// SELECTION SORT
function findMinIdx(array) {
    let minIdx = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[minIdx]) {
            minIdx = i;
        }
    }
    return minIdx;
}

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIdx = findMinIdx(array.slice(i)) + i;
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
    return array;
}

// console.log(selectionSort([2, 7, 4, 9, -4, 7, 9, 0, -5, 8, 7]));