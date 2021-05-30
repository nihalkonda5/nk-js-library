declare global {
    interface Object {
        normalizeJSON(): Object;
        keySet(): string[];
    }
}
export {};
