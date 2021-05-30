"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.prototype.keySet = function () {
    return Object.keys(this);
};
Object.prototype.normalizeJSON = function ({ undefinedOk, nullOk, zeroOk }) {
    console.log('normalizeJson', this);
    if (this instanceof Array)
        return this;
    let data = {};
    const keys = Object.keys(this);
    if (keys.length === 0)
        return this;
    for (const k of keys) {
        if (this[k] instanceof Object) {
            data[k] = this[k].normalizeJSON();
        }
        else if ((undefinedOk || (this[k] !== undefined)) &&
            (nullOk || (this[k] !== null)) &&
            (zeroOk || (this[k] !== 0))) {
            data[k] = this[k];
        }
    }
    return data;
};
console.log('Object: new fuctions added to prototype');
