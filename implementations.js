"use strict";

// BINARY SEARCH
/**
 * Binary search implementation
 * @param {array} sortedArray
 * @param {number} value
 * @return {number} - index of the value, If the value is not found, return -1
 */
function binarySearch(sortedArray, value) {
    let min = 0;
    let max = sortedArray[sortedArray.length - 1];
    let mid = Math.floor((max - min) / 2);

    while (min < max) {
        mid = Math.floor((max - min) / 2);
        let guess = sortedArray[mid];

        if (guess === value) {
            return mid;
        }
        if (guess < value) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }

    return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));


// LINKED LIST

/**
 * An implementation of a linked list for solving problems on freeCodeCamp
 * @constructor
 */
function LinkedList() {
    let length = 0;
    let head = null;

    let Node = function(element){
        this.element = element;
        this.next = null;
    };

    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    /**
     * Adds an element to the end of the linked list
     * @param element
     */
    this.add = function(element){
        // Only change code below this line
        let node = new Node(element);

        if(head === null){
            head = node;
        } else {
            let currentNode = head;

            while(currentNode.next !== null){
                currentNode  = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
        // Only change code above this line
    };

    /**
     * Removes an element from the linked list
     * @param element
     */
    this.remove = function(element){
        // Only change code below this line
        length--;

        if (element === head) {
            head = head.next;
        } else {
            let prevElement = head;
            let currentElement = head.next;

            while (element !== currentElement.element) {
                prevElement = currentElement;
                currentElement = currentElement.next;
            }
            prevElement.next = currentElement.next;
        }
        // Only change code above this line
    };

    /**
     * Finds an element's index in the linked list. If the element is not found in the linked list, return -1
     * @param element
     */
    this.indexOf = function(element) {
        // Only change code below this line
        let index = 0;
        let currentElement = head;

        while (element !== currentElement.element) {
            index++;

            if (currentElement.next !== null) {
                currentElement = currentElement.next;
            } else {
                return -1;
            }
        }

        return index;
        // Only change code above this line
    };

    /**
     * Finds an element with provided index, if the index < 0 or is greater than the list length,
     * return undefined
     * @param index
     * @return {*}
     */
    this.elementAt = function(index) {
        // Only change code below this line
        if (index < 0 || index >= length) {
            return undefined;
        } else {
            let currentIdx = 0;
            let currentElement = head;

            while (currentIdx < index) {
                currentElement = currentElement.next;
                currentIdx++;
            }
            return currentElement.element;
        }
        // Only change code above this line
    };

    /**
     * Removes an element at a given index, if the index < 0 or is greater than the list length,
     * return null
     * @param index
     * @return {*}
     */
    this.removeAt = function(index) {
        // Only change code below this line
        if (index < 0 || index >= length) {
            return null;
        } else {
            length--;

            let currentIndex = 0;
            let currentElement = head;
            let prevElement;

            while (currentIndex < index) {
                currentIndex++;
                prevElement = currentElement;
                currentElement = currentElement.next;
            }

            prevElement.next = currentElement.next;
            return currentElement.element;

        }
        // Only change code above this line
    };

    /**
     * Adds an element at a given index, if the index < 0 or is greater than the list length,
     * return false
     * @param index
     * @param element
     * @return {*}
     */
    this.addAt = function(index, element) {
        // Only change code below this line
        if (index < 0 || index >= length) {
            return false;
        } else {
            element = new Node(element);

            let currentIndex = 0;
            let currentElement = head;
            let prevElement;

            if (index === 0) {
                element.next = head.next;
                head = element;
            } else {
                while (currentIndex < index) {
                    currentIndex++;
                    prevElement = currentElement;
                    currentElement = currentElement.next;
                }

                prevElement.next = element;
                element.next = currentElement;
            }

            length++;
            return element.element;
        }
        // Only change code above this line
    };
}
