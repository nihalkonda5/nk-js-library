declare global {
    interface Object {
        normalizeJSON(props?: {
            undefinedOk?: boolean,
            nullOk?: boolean,
            zeroOk?: boolean
        }): Object;
        keySet(): string[];
    }
}

Object.prototype.keySet = function () {
    return Object.keys(this);
}

Object.prototype.normalizeJSON = function ({ undefinedOk, nullOk, zeroOk }: {
    undefinedOk?: boolean,
    nullOk?: boolean,
    zeroOk?: boolean
}) {
    console.log('normalizeJson', this);
    if (this instanceof Array)
        return this
    let data = {};
    const keys = Object.keys(this);

    if (keys.length === 0)
        return this;

    for (const k of keys) {
        if (this[k] instanceof Object) {
            data[k] = this[k].normalizeJSON();
        } else if (
            (undefinedOk || (this[k] !== undefined)) &&
            (nullOk || (this[k] !== null)) &&
            (zeroOk || (this[k] !== 0))
        ) {
            data[k] = this[k];
        }
    }
    return data;
}

console.log('Object: new fuctions added to prototype');


export { };