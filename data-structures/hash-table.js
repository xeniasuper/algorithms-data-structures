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



