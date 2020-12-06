interface INotification{
    userId:string,
    text?:string,
    data?:any
}

interface Message{
    type:string,
    metadata?:any,
    notifications?:INotification[]
    data:any
}

interface Subscriber{
    processMessage(message:Message) : any
}

class Main{
    
    subscription : {[key: string]:Subscriber[]} = {};

    addSubscriberAll = (messageTypes:any, subscriber:Subscriber) => {
        const topics = [];
        for(const k of Object.keys(messageTypes)){
            if(typeof messageTypes[k] === typeof 's'){
                topics.push(messageTypes[k]);
            }else{
                this.addSubscriberAll(messageTypes[k],subscriber);
            }
        }
        for(const t of topics){
            this.addSubscriber(t,subscriber);
        }
    }

    addSubscriber = (messageType:string, subscriber:Subscriber) => {
        if(messageType in this.subscription === false){
            this.subscription[messageType] = []
        }
        this.subscription[messageType].push(subscriber);
    }

    removeSubscriber = (messageType:string, subscriber:Subscriber) => {
        this.subscription[messageType] = this.subscription[messageType].filter(
            (value:Subscriber, index, arr)=>value!=subscriber
        );
    }

    publishMessage = (message:Message) => {
        console.log('PubSub',message);
        var sub = this.subscription;
        new Promise<any>(function(resolve,reject){
            try {
                if(sub[message.type]){
                    for(const subscriber of sub[message.type]){
                        try {
                            subscriber.processMessage(message);
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }
            } catch (error) {
                console.log(error);
            }
        });
    }

}

const Organizer = new Main();

export {
    Message,
    Subscriber,
    Organizer
}