declare class Main {
    private static instance;
    bound: {
        [key: string]: Function;
    };
    private constructor();
    static getInstance(): Main;
    bindFunction: (name: string, func: Function) => void;
    boundFunction: (name: string) => Function;
}
declare const _default: Main;
export default _default;
