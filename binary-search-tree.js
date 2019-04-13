"use strict";

// BINARY SEARCH TREE
let displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));

/**
 * Represents a node in a binary search tree
 * @param value
 * @constructor
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/**
 * Represents a binary search tree
 * @constructor
 */
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    /**
     * Finds minimum value
     * @return {Node.value}
     */
    this.findMin = function() {
        return this._findExtremum("left");
    };

    /**
     * Finds maximum value
     * @return {Node.value}
     */
    this.findMax = function () {
        return this._findExtremum("right");
    };

    /**
     * Finds minimum or maximum value.
     * @param {string} side - left, if you want to find the minimum,
     *                 right, if you want to find the maximum
     * @return {null|Node.value}
     * @private
     */
    this._findExtremum = function(side){
        if (this.root === null) return null;

        let current = this.root;
        while (current[side] !== null) {
            current = current[side];
        }
        return current.value;
    };

    /**
     * Adds a node to a tree
     * @param {number} number
     * @return {null}
     */
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

    /**
     * Checks whether there is a node with specific value
     * @param number
     * @return {boolean}
     */
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


    /**
     * Finds the minimum height of a tree
     * @param node
     * @return {number} - if the tree is empty, return -1
     */
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

    /**
     * Finds the maximum height of a tree
     * @param node
     * @return {number} - if the tree is empty, return -1
     */
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

    /**
     * Checks whether a tree is balanced
     * @return {boolean}
     */
    this.isBalanced = function() {
        return this.findMinHeight() === this.findMaxHeight();
    }
    // change code above this line
}

let t = new BinarySearchTree();
console.log(t.findMin());