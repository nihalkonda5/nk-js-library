declare global {
    interface JSON {
        normalize(a: object, props?: {
            undefinedOk?: boolean,
            nullOk?: boolean,
            zeroOk?: boolean
        }): Object;
    }
}

JSON.normalize = function (a: object, { undefinedOk, nullOk, zeroOk }: {
    undefinedOk?: boolean,
    nullOk?: boolean,
    zeroOk?: boolean
}) {
    console.log('normalizeJson', a);
    if (a instanceof Array)
        return a
    let data = {};
    const keys = Object.keys(a);

    if (keys.length === 0)
        return a;

    for (const k of keys) {
        if (a[k] instanceof Object) {
            data[k] = a[k].normalizeJSON();
        } else if (
            (undefinedOk || (a[k] !== undefined)) &&
            (nullOk || (a[k] !== null)) &&
            (zeroOk || (a[k] !== 0))
        ) {
            data[k] = a[k];
        }
    }
    return data;
}

console.log('Object: new fuctions added to prototype');


export { };