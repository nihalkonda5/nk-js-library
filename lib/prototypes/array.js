"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.clone = function () {
    return [...this];
};
Array.prototype.shuffle = function () {
    var currentIndex = this.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }
};
Array.prototype.shuffledClone = function () {
    const clone = this.clone();
    clone.shuffle();
    return clone;
};
Array.prototype.numberSort = function (ascending = true) {
    this.sort((a, b) => ascending ? a - b : b - a);
};
Array.prototype.isEmpty = function () {
    return this.length === 0;
};
Array.prototype.iterate = function (callback, options) {
    const len = this.length;
    options = JSON.defaultJSON(options, {
        reverse: false,
        thisArg: this,
        increment: 1
    });
    for (let i = 0; i < len; i += options.increment) {
        const index = options.reverse ? len - i - 1 : i;
        if (callback.apply(options.thisArg, [this[index], index, this, len]) === false)
            break;
    }
};
console.log('Array: new fuctions added to prototype');
