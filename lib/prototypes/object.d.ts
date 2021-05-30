declare global {
    interface Object {
        normalizeJSON(props?: {
            undefinedOk?: boolean;
            nullOk?: boolean;
            zeroOk?: boolean;
        }): Object;
        keySet(): string[];
    }
}
export {};
