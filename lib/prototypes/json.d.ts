declare global {
    interface JSON {
        normalize(a: object, props?: {
            undefinedOk?: boolean;
            nullOk?: boolean;
            zeroOk?: boolean;
        }): Object;
        defaultJSON<T>(mainObj: T, defaultObj: T): T;
    }
}
export {};
