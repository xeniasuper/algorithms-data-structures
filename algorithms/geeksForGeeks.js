/**
 * Given an unsorted sequence a[],
 * the task is to find the K-th missing contiguous element
 * in the increasing sequence of the array elements
 * i.e. consider the array in sorted order and find the kth missing number.
 * If no k-th missing element is there output -1.
 */
function findMissing(array) {
    let max = Math.max(...array);
    let min = Math.min(...array);
    let set = new Set(array);

    for (let missing = min; missing <= max; missing++) {
        if (set.has(missing)) {
            missing++;
        } else {
            return missing;
        }
    }
    return null;
}
// console.log(findMissing([3, 1, 4, 7, 2, 6]));
