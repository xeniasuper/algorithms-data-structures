"use strict";
let displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
let Node = function() {
    this.keys = new Map();
    this.end = false;
    this.setEnd = function() {
        this.end = true;
    };
    this.isEnd = function() {
        return this.end;
    };
};


function TrieSearchTree() {
    this.root = new Node();

    this.add = function(string) {
        let node = this.root;

        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            if (!node.keys.has(char)) {
                node.keys.set(char, new Node());
            }
            node = node.keys.get(char);
        };
        node.setEnd();
    };

    this.isWord = function(string) {
        let node = this.root;

        for (let i = 0; i < string.length; i++) {
            let char = string[i];
            if (!node.keys.has(char)) {
                return false;
            } else {
                node = node.keys.get(char);
            }
        }
        return node.isEnd();
    };

    this.print = function() {
        let words = [];

        function search(node, word) {
            if (node.keys.size !== 0) {
                for (let [char, children] of node.keys) {
                    search(children, word+char);
                }
                if (node.isEnd()) {
                    words.push(word);
                }
            } else {
                words.push(word);
                return;
            }
        }
        search(this.root, "");
        console.log(words);
    }
};

let trie = new TrieSearchTree();
trie.add("king");
trie.add("gizzard");
trie.add("gizzer");
trie.add("gi");
trie.add("gizs");
// console.log(trie.isWord(""));
trie.print();
// console.log(trie);


