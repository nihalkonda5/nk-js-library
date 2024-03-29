type iterateCallback<T> = ((value: T, index: number, thisArg: any, length: number) => (boolean | void));

declare global {
    interface Array<T> {
        clone(): T[];
        shuffle(): void;
        shuffledClone(): T[];
        numberSort(): void;
        isEmpty(): boolean;
        iterate(
            callback: iterateCallback<T>,
            options?: {
                reverse?: boolean,
                increment?: number,
                thisArg?: any
            }
        ): void;
    }
}

Array.prototype.clone = function () {
    return [...this];
}

Array.prototype.shuffle = function () {
    var currentIndex = this.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }
};

Array.prototype.shuffledClone = function () {
    const clone = this.clone();
    clone.shuffle();
    return clone;
}

Array.prototype.numberSort = function (ascending = true) {
    this.sort((a: number, b: number) => ascending ? a - b : b - a);
};

Array.prototype.isEmpty = function () {
    return this.length === 0;
};

Array.prototype.iterate = function <T>(
    callback: iterateCallback<T>,
    options: {
        reverse?: boolean,
        thisArg?: any,
        increment?: number
    }
) {
    const len: number = this.length;
    options = JSON.defaultJSON(options, {
        reverse: false,
        thisArg: this,
        increment: 1
    });
    for (let i = 0; i < len; i += options.increment) {
        const index = options.reverse ? len - i - 1 : i;
        if (callback.apply(options.thisArg, [this[index], index, this, len]) === false) break;
    }
}

console.log('Array: new fuctions added to prototype');

export { };