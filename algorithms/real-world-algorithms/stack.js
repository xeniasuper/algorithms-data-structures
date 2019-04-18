// STACK
function Stack() {
    this._length = 0;
    this._container = [];
};

Stack.prototype.length = function() {
    return this._length;
};

Stack.prototype.push = function(element) {
  this._container = [...this._container, element];
  this._length++;
  return this._length;
};

Stack.prototype.pop = function() {

    let elementPop = this._container[this._length-1];
    if (elementPop !== undefined) {

        this._container = this._container.slice(0, this._length - 1);
        this._length--;

        return elementPop;
    } else {
        throw new Error("Cannot pop from an empty array");
    }
};

Stack.prototype.top = function() {
    let topElement = this._container[this.length-1];
    if (topElement !== undefined) {
        return this._container[this.length-1];
    } else {
        throw new Error("Cannot get the top element from an empty array");
    }
};

Stack.prototype.isEmpty = function () {
    if (this._length === 0) {
        return true;
    }
    return false;
};

Stack.prototype.inspect = function() {
    let string = "[";
    for (let i = 0; i < this._length; i++) {
        if (i === this._length-1) {
            string += this._container[i];
        } else {
            string += this._container[i] + ", ";
        }
    }
    string += "]";
    return string;
};

// let stack = new Stack();
// stack.push(3);
// stack.push(5);
// stack.push(6);
// stack.pop();
// console.log(stack.isEmpty());


