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

// LONGEST COMMON SUBSEQUENCE
// PYRAMID
function printPyramid(n) {
    let numChars = 1;
    let numSpaces = Math.floor(n / 2);

    while (numSpaces >= 0) {
        let line = "";
        for (let j = 1; j <= numSpaces; j++) {
            line += " ";
        }
        for (let j = 1; j <= numChars; j++) {
            line += "A";
        }
        console.log(line);
        numChars += 2;
        numSpaces--;
    }
}
// printPyramid(8);

// LONGEST COMMON SUBSTRING
function longestCommonSubstring(str1, str2) {
    let matrix = [];
    let maxLength = 0;

    for (let i = 0; i < str1.length; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] !== str2[j]) {
                matrix[i][j] = 0;
            } else {
                if (i === 0 || j === 0) {
                    matrix[i][j] = 1;
                } else {
                    matrix[i][j] = matrix[i-1][j-1] + 1;
                }
                if (maxLength < matrix[i][j]) {
                    maxLength = matrix[i][j];
                }
            }
        }
    }
    return maxLength;
}
// console.log(longestCommonSubstring("kinggizzard", "lizardwizard"));

