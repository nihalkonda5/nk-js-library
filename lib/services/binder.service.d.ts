declare class Main {
    bound: {
        [key: string]: Function;
    };
    bindFunction: (name: string, func: Function) => void;
    boundFunction: (name: string) => Function;
}
declare const _default: Main;
export default _default;
