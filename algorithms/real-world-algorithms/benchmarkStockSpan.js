"use strict";

let stockSpans = require("./stockSpan");

function getTime(func) {
    let time = [];
    for (let i = 0; i < 10; i++) {
        let testArray = createTestArray(3, 15, 100000);

        let start = new Date();
        func(testArray);
        let end = new Date();

        time.push(end-start);
    };
    return time;
}

function createTestArray(min, max, numElems) {
    let array = [];
    for (let i = 0; i < numElems; i++) {
        array.push(getRandomInt(min, max));
    }
    return array;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getTime(stockSpans.stockSpan));
console.log(getTime(stockSpans.stockSpanEffective));