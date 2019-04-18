"use strict";

function isCorrect(snippet) {
    let reBraces = /[\[\]\(\){}]/g;
    let braces = snippet.match(reBraces);
    let stack = [];

    let openingBraces = {
                            "{" : "}",
                            "[" : "]",
                            "(" : ")"
                        }

    for (let i = 0; i < braces.length; i++) {
        if (openingBraces.hasOwnProperty(braces[i])) {
            stack.push(braces[i]);
        } else {
            if (stack.length !== 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }
    return true;
}

console.log(isCorrect("function isCorrect(snippet) {\n" +
    "    let reBraces = /[[]\\(\\){}]/;\n" +
    "    let braces = snippet.match(reBraces);\n" +
    "    let stack = [];\n" +
    "\n" +
    "    let openingBraces = {\n" +
    "                            \"{\" : \"}\",\n" +
    "                            \"[\" : \"]\",\n" +
    "                            \"(\" : \")\"\n" +
    "                        }\n" +
    "\n" +
    "    for (let i = 0; i < braces.length; i++) {\n" +
    "        if (openingBraces.hasOwnProperty(braces[i])) {\n" +
    "            stack.push(brace);\n" +
    "        } else {\n" +
    "            if (stack.length !== 0) {\n" +
    "                stack.pop();  \n" +
    "            } else {\n" +
    "                return false;\n" +
    "            }\n" +
    "        }\n" +
    "    }\n" +
    "\n" +
    "    if (stack.length !== 0) {\n" +
    "        return false;\n" +
    "    }\n" +
    "    return true;\n" +
    "}"));

console.log(isCorrect("]"))