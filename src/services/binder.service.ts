class Main{

    bound : {[key:string]:Function} = {};

    bindFunction = (name:string,func:Function) => {
        this.bound[name] = func;
    }

    boundFunction = (name:string) => {
        return this.bound[name];
    }
    
}

export default new Main();