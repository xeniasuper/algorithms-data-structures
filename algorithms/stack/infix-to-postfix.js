"use strict";

/**
 * Converts from infix to postfix arithmetic notation
 * @param str - arithmetic expression
 * @return {string}
 */
function infixToPostfix(str) {
    let output = "";

    let operatorsPriorities = {
        "+": 2,
        "-": 2,
        "*": 1,
        "/": 1,
        "^": 0
    };
    let operatorsStack = [];

    for (let i = 0; i < str.length; i++) {
        if (!operatorsPriorities.hasOwnProperty(str[i])) {
            if (str[i] === "(") {
                operatorsStack.push(str[i]);
            } else if (str[i] === ")") {
                let numToPop = 0;

                for (let j = operatorsStack.length-1; j >= 0; j--) {
                    if (operatorsStack[j] !== "(") {
                        numToPop++;
                    } else {
                        numToPop++;
                        break;
                    }
                }
                for (let k = 0; k < numToPop; k++) {
                    let operator = operatorsStack.pop();
                    if (operator !== "(") {
                        output += operator;
                    }
                }
            } else {
                output += str[i];
            }
        } else {
            let lastOperator = operatorsStack[operatorsStack.length-1];

            if (operatorsStack.length === 0 ||
                operatorsPriorities[lastOperator] > operatorsPriorities[str[i]]) {
                    operatorsStack.push(str[i]);
            } else {
                let numToPop = 0;
                for (let j = operatorsStack.length-1; j >= 0; j--) {
                    let operator = operatorsStack[j];
                    if (operatorsStack[j] === "(" || operatorsStack[j] === ")") {
                        break;
                    } else if (operatorsPriorities[operator] <= operatorsPriorities[str[i]]) {
                        numToPop++;
                    }
                }

                for (let k = 0; k < numToPop; k++) {
                    output += operatorsStack.pop();
                }
                operatorsStack.push(str[i]);
            }
        }
    }

    while (operatorsStack.length !== 0) {
        output += operatorsStack.pop();
    }

    return output;
}

console.log(infixToPostfix("a+b*(c^d-e)^(f+g*h)-i"));