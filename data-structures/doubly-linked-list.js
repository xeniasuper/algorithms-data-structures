"use strict";

// DOUBLY LINKED LIST
/**
 * Represents a node of a doubly linked list
 * @param data
 * @param prev
 * @constructor
 */
function Node(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
};

/**
 * Represents a doubly linked list
 * @constructor
 */
let DoublyLinkedList = function () {
    this.head = null;
    this.tail = null;

    /**
     * Adds an element to the end
     * @param elem
     */
    this.add = function(elem) {
        if (this.head === null) {
            let item = new Node(elem, null);
            this.head = item;
            item.next = this.tail;
        } else {
            let currElem = this.head;

            while(currElem.next !== null) {
                currElem = currElem.next;
            }

            let item = new Node(elem, currElem);
            currElem.next = item;
            item.next = this.tail;
        }
    };

    /**
     * Removes all occurences of an element, if there are no return null
     * @param elem
     * @return {null}
     */
    this.remove = function(elem) {
        if (this.head === null) {
            return null;
        } else {
            let currElem = this.head;

            while (currElem.next !== null) {
                if (elem === currElem.data) {
                    if (currElem.prev !== null) {
                        currElem.prev.next = currElem.next;
                        currElem.next.prev = currElem.prev;
                    } else {
                        this.head = currElem.next;
                        this.head.prev = null;
                    }
                }
                currElem = currElem.next;
            }

            if (elem === currElem.data) {
                currElem.prev.next = null;
            }
        }
    }
};

