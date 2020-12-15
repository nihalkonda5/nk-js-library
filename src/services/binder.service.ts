class Main {

    private static instance: Main;

    bound: { [key: string]: Function } = {};

    private constructor() {
        this.bound = {};
    }

    static getInstance(): Main {
        if (!Main.instance)
            Main.instance = new Main();
        return Main.instance;
    }

    bindFunction = (name: string, func: Function) => {
        this.bound[name] = func;
    }

    boundFunction = (name: string) => {
        return this.bound[name];
    }

}

export default Main.getInstance();