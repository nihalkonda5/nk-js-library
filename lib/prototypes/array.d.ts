declare type iterateCallback<T> = ((value: T, index: number, thisArg: any, length: number) => (boolean | void));
declare global {
    interface Array<T> {
        clone(): T[];
        shuffle(): void;
        shuffledClone(): T[];
        numberSort(): void;
        isEmpty(): boolean;
        iterate(callback: iterateCallback<T>, options?: {
            reverse?: boolean;
            increment?: number;
            thisArg?: any;
        }): void;
    }
}
export {};
