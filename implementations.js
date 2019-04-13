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

// HASH TABLE
let called = 0;
/**
 * A naive hash function
 * @param string
 * @return {number}
 */
let hash = (string) => {
    called++;
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash;
};

/**
 * An implementation of Hash Table
 * @constructor
 */
let HashTable = function () {
    this.collection = {};
    // change code below this line
    /**
     * Adds a key-value pair
     * @param key
     * @param value
     */
    this.add = function(key, value) {
        let trueKey = hash(key);
        if (this.collection.hasOwnProperty(trueKey)) {
            let values = this.collection[trueKey];
            for (let i = 0; i < values.length; i++) {
                if (values[i][0] === key) {
                    values[i][1] = value;
                    break;
                } else {
                    this.collection[trueKey].push([ key, value ]);
                }
            }
        } else {
            this.collection[trueKey] = [[ key, value ]];
        }
    };

    /**
     * Removes a key-value pair
     * @param key
     */
    this.remove = function(key) {
        let trueKey = hash(key);
        let value = this.collection[trueKey];
        for (let i = 0; i < value.length; i++) {
            if (value[i][0] === key) {
                value.splice(i, 1);
                break;
            }
        }
        if ((value.length) === 0) {
            delete this.collection[trueKey];
        }
    };

    /**
     * Gives a value associated with a key
     * @param key
     * @return {null|*}
     */
    this.lookup = function(key) {
        let trueKey = hash(key);
        if (this.collection.hasOwnProperty(trueKey)) {
            let values = this.collection[trueKey];
            for (let i = 0; i < values.length; i++) {
                if (values[i][0] === key) {
                    return values[i][1];
                }
            }
        } else {
            return null;
        }
    }
    // change code above this line
};

// BINARY SEARCH TREE
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    this.findMin = function() {
        return this._findExtremum("left");
    };

    this.findMax = function () {
        return this._findExtremum("right");
    };

    this._findExtremum = function(side){
        if (this.root === null) return null;

        let current = this.root;
        while (current[side] !== null) {
            current = current[side];
        }
        return current.value;
    };

    this.add = function(number) {
        let node = new Node(number);

        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root;
            let flag = true;

            while (flag) {
                if (number < current.value) {
                    if (current.left !== null) {
                        current = current.left;
                    } else {
                        flag = false;
                    }
                } else if (number > current.value) {
                    if (current.right !== null) {
                        current = current.right;
                    } else {
                        flag = false;
                    }
                } else {
                    return null;
                }
            }
            if (number < current.value) {
                current.left = node;
            } else {
                current.right = node;
            }
        }
    };

    this.isPresent = function(number) {
        let node = new Node(number);

        if (this.root === null) {
            return false;
        } else {
            let current = this.root;
            let flag = true;

            while (flag) {
                if (number < current.value) {
                    if (current.left !== null) {
                        current = current.left;
                    } else {
                        flag = false;
                    }
                } else if (number > current.value) {
                    if (current.right !== null) {
                        current = current.right;
                    } else {
                        flag = false;
                    }
                } else {
                    return true;
                }
            }
            return false;
        }
    };


    this.findMinHeight = function(node = this.root) {
        if (node === null) {
            return -1;
        };

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    };
    this.findMaxHeight = function(node=this.root) {
        if (node === null) {
            return -1;
        };

        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    };

    this.isBalanced = function() {
        return this.findMinHeight() === this.findMaxHeight();
    }
    // change code above this line
}

let t = new BinarySearchTree();
console.log(t.findMin());

