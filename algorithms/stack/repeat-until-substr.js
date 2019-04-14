"use strict";

// Given a string A consisting of n characters and a string B consisting of m characters,
// write a function that will return the number of times A must be stated
// such that B is a substring of the repeated A.
// If B can never be a substring, return -1.
//
// Example:
// A = ‘abcd’
// B = ‘cdabcdab’
// The function should return 3 because after stating A 3 times,
// getting ‘abcdabcdabcd’, B is now a substring of A.
//
// You can assume that n and m are integers in the range [1, 1000].

function repetitions(str1, str2) {
    let repetitions  = 1;
    if (!sameCharsOrder(str1, str2)) {
        return false;
    } else {
        while (!isSubstring(str2, str1)) {
            repetitions++;
            str1 += str1;
        }
    }
    return repetitions;
}

function sameChars(str1, str2) {
    let chars1 = getChars(str1);
    let chars2 = getChars(str2);
    return compareChars(chars1, chars2);
}

function compareChars(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    arr1.sort((char1, char2) => char1.localeCompare(char2));
    arr2.sort((char1, char2) => char1.localeCompare(char2));

    for (let i = 0; i < arr1.length; i++) {
        if (arr2[i] !== arr1[i]) {
            return false;
        }
    }

    return true;
}

function sameCharsOrder(str1, str2) {
    if (sameChars(str1, str2)) {
        let charsOrder1 = charsOrder(str1);
        let charsOrder2 = charsOrder(str2);
        return compareObjects(charsOrder1, charsOrder2);
    } else {
        return false;
    }
}

function charsOrder(str) {
    let charsOrder = {};

    for (let i = 0; i < str.length-1; i++) {
        if (!charsOrder.hasOwnProperty(str[i])) {
            charsOrder[str[i]] = str[i+1]
        }
    }
    let lastIdx = str.length-1;
    if (!charsOrder.hasOwnProperty(str[lastIdx])) {
        charsOrder[str[lastIdx]] = str[0];
    }
    return charsOrder;
}

function compareObjects(obj1, obj2) {
    for (let prop in obj1) {
        if (obj1.hasOwnProperty(prop) && obj2.hasOwnProperty(prop)) {
            if (!obj1[prop] === obj2[prop]) {
                return false;
            }
        }
    }
    return true;
}

function getChars(str) {
    let chars = [];
    for (let i = 0; i < str.length; i++) {
        if (chars.indexOf(str[i]) === -1) {
            chars.push(str[i]);
        }
    }
    return chars;
}

function isSubstring(str, srcStr) {
    if (str.length > srcStr.length) {
        return false
    } else {
        let reStr = new RegExp(str);
        if (srcStr.match(reStr) !== null) {
            return true;
        }
        return false;
    }
}

console.log(repetitions("abcd", "cdabcdab"));