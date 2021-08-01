declare global {
    interface Object {
        notUndefined(value: any): boolean;
        notNull(value: any): boolean;
        notUndefinedOrNull(value: any): boolean;
        isUndefined(value: any): boolean;
        isNull(value: any): boolean;
        isUndefinedOrNull(value: any): boolean;
        isArray(value: any): boolean;
        isObject(value: any): boolean;
    }
}

Object.notUndefined = function (value) {
    return value !== undefined;
}

Object.notNull = function (value) {
    return value !== null;
}

Object.notUndefinedOrNull = function (value) {
    return Object.notUndefined(value) && Object.notNull(value);
}

Object.isUndefined = function (value) {
    return value === undefined;
}

Object.isNull = function (value) {
    return value === null;
}

Object.isUndefinedOrNull = function (value) {
    return Object.isUndefined(value) || Object.isNull(value);
}

Object.isArray = function (value) {
    return value instanceof Array;
}

Object.isObject = function (value) {
    return value instanceof Object;
}

console.log('Object: new fuctions added to prototype');

export { };