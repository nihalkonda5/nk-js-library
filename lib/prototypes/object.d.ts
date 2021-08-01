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
export {};
