"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Main {
    constructor() {
        this.bound = {};
        this.bindFunction = (name, func) => {
            this.bound[name] = func;
        };
        this.boundFunction = (name) => {
            return this.bound[name];
        };
    }
}
exports.default = new Main();
