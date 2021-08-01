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
JSON.defaultJSON = function (mainObj, defaultObj) {
    if (Object.isUndefinedOrNull(mainObj))
        return defaultObj;
    [...(new Set([
            ...Object.keys(mainObj),
            ...Object.keys(defaultObj),
        ]))].forEach((key) => {
        if (Object.isUndefined(mainObj[key])) {
            mainObj[key] = defaultObj[key];
        }
        else if (Object.isObject(mainObj[key])) {
            mainObj[key] = JSON.defaultJSON(mainObj[key], defaultObj[key]);
        }
    });
    return mainObj;
};
console.log('Object: new fuctions added to prototype');
