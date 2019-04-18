"use strict";

function PostfixCalculator() {
    this._expression = "";
    this._stack = [];
}

PostfixCalculator.prototype._operators = {
    "+" : function(lhs, rhs) {
        return lhs + rhs;
    },
    "-" : function(lhs, rhs) {
        return lhs - rhs;
    },
    "*" : function (lhs, rhs)  {
        return lhs * rhs;
    },
    "/" : function (lhs, rhs) {
        return lhs / rhs;
    },
    "^" : function (lhs, rhs) {
        return lhs**rhs;
    }
}

PostfixCalculator.prototype.evaluate = function(expression) {
    for (let i = 0; i < expression.length; i++) {
        let token = expression[i];
        let reNumber = /\d/;

        if (reNumber.test(token)) {
            this._stack.push(parseInt(token));
        } else if (this._operators.hasOwnProperty(token)) {
            let rhs = this._stack.pop();
            let lhs = this._stack.pop();
            let operation = this._operators[token];

            this._stack.push(operation(lhs, rhs));
        } else {
            throw new Error("Incorrect input");
        }
    }
    return this._stack.pop();
}

let postfixCalc = new PostfixCalculator();
console.log(postfixCalc.evaluate("132^+4-2/"));