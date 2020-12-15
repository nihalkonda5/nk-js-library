interface INotification {
    userId: string,
    text?: string,
    data?: any
}

interface Message {
    type: string,
    metadata?: any,
    notifications?: INotification[]
    data: any,
    [key: string]: any
}

interface Subscriber {
    processMessage(message: Message): any
}

class Main {

    private static instance: Main;

    subscription: { [key: string]: Subscriber[] } = {};

    private constructor() {
        this.subscription = {};
    }

    static getInstance(): Main {
        if (!Main.instance)
            Main.instance = new Main();
        return Main.instance;
    }

    addSubscriberAll = (messageTypes: any, subscriber: Subscriber) => {
        const topics = [];
        for (const k of Object.keys(messageTypes)) {
            if (typeof messageTypes[k] === typeof 's') {
                topics.push(messageTypes[k]);
            } else {
                this.addSubscriberAll(messageTypes[k], subscriber);
            }
        }
        for (const t of topics) {
            this.addSubscriber(t, subscriber);
        }
    }

    addSubscriber = (messageType: string, subscriber: Subscriber) => {
        if (messageType in this.subscription === false) {
            this.subscription[messageType] = []
        }
        this.subscription[messageType].push(subscriber);
    }

    removeSubscriber = (messageType: string, subscriber: Subscriber) => {
        this.subscription[messageType] = this.subscription[messageType].filter(
            (value: Subscriber, index, arr) => value != subscriber
        );
    }

    publishMessage = (message: Message) => {
        console.log('PubSub', message);
        var sub = this.subscription;
        new Promise<any>(function (resolve, reject) {
            try {
                if (sub[message.type]) {
                    for (const subscriber of sub[message.type]) {
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

const Organizer = Main.getInstance();

export {
    Message,
    Subscriber,
    Organizer
}