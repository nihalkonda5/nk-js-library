"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.notUndefined = function (value) {
    return value !== undefined;
};
Object.notNull = function (value) {
    return value !== null;
};
Object.notUndefinedOrNull = function (value) {
    return Object.notUndefined(value) && Object.notNull(value);
};
Object.isUndefined = function (value) {
    return value === undefined;
};
Object.isNull = function (value) {
    return value === null;
};
Object.isUndefinedOrNull = function (value) {
    return Object.isUndefined(value) || Object.isNull(value);
};
Object.isArray = function (value) {
    return value instanceof Array;
};
Object.isObject = function (value) {
    return value instanceof Object;
};
console.log('Object: new fuctions added to prototype');
