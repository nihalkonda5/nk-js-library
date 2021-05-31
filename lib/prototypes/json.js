"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
JSON.normalize = function (a, props) {
    console.log('normalizeJson', a);
    if (a instanceof Array)
        return a;
    let data = {};
    const keys = Object.keys(a);
    if (keys.length === 0)
        return a;
    props = props || {
        undefinedOk: false,
        nullOk: false,
        zeroOk: false
    };
    for (const k of keys) {
        if (a[k] instanceof Object) {
            data[k] = a[k].normalizeJSON();
        }
        else if ((props.undefinedOk || (a[k] !== undefined)) &&
            (props.nullOk || (a[k] !== null)) &&
            (props.zeroOk || (a[k] !== 0))) {
            data[k] = a[k];
        }
    }
    return data;
};
console.log('Object: new fuctions added to prototype');
