"use strict";

// LINKED LIST
/**
 * An implementation of a linked list for solving problems on freeCodeCamp
 * @constructor
 */
function LinkedList() {
    let length = 0;
    let head = null;

    function Node(item){
        this.item = item;
        this.next = null;
    };

    this.size = function(){
        return length;
    };

    this.head = function(){
        return head;
    };

    /**
     * Adds an item to the end of the linked list
     * @param item
     */
    this.add = function(item){
        // Only change code below this line
        let node = new Node(item);

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
     * Removes an item from the linked list
     * @param item
     */
    this.remove = function(item){
        // Only change code below this line
        length--;

        if (item === head) {
            head = head.next;
        } else {
            let prevElement = head;
            let currentElement = head.next;

            while (item !== currentElement.item) {
                prevElement = currentElement;
                currentElement = currentElement.next;
            }
            prevElement.next = currentElement.next;
        }
        // Only change code above this line
    };

    /**
     * Finds an item's index in the linked list. If the item is not found in the linked list, return -1
     * @param item
     */
    this.indexOf = function(item) {
        // Only change code below this line
        let index = 0;
        let currentElement = head;

        while (item !== currentElement.item) {
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
     * Finds an item with provided index, if the index < 0 or is greater than the list length,
     * return undefined
     * @param index
     * @return {*}
     */
    this.itemAt = function(index) {
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
            return currentElement.item;
        }
        // Only change code above this line
    };

    /**
     * Removes an item at a given index, if the index < 0 or is greater than the list length,
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
            return currentElement.item;

        }
        // Only change code above this line
    };

    /**
     * Adds an item at a given index, if the index < 0 or is greater than the list length,
     * return false
     * @param index
     * @param item
     * @return {*}
     */
    this.addAt = function(index, element) {
        // Only change code below this line
        if (index < 0 || index >= length) {
            return false;
        } else {
            let item = new Node(element);

            let currentIndex = 0;
            let currentElement = head;
            let prevElement;

            if (index === 0) {
                item.next = head.next;
                head = item;
            } else {
                while (currentIndex < index) {
                    currentIndex++;
                    prevElement = currentElement;
                    currentElement = currentElement.next;
                }

                prevElement.next = item;
                item.next = currentElement;
            }

            length++;
            return item.item;
        }
        // Only change code above this line
    };
};

