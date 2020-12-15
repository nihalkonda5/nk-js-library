interface INotification {
    userId: string;
    text?: string;
    data?: any;
}
interface Message {
    type: string;
    metadata?: any;
    notifications?: INotification[];
    data: any;
    [key: string]: any;
}
interface Subscriber {
    processMessage(message: Message): any;
}
declare class Main {
    private static instance;
    subscription: {
        [key: string]: Subscriber[];
    };
    private constructor();
    static getInstance(): Main;
    addSubscriberAll: (messageTypes: any, subscriber: Subscriber) => void;
    addSubscriber: (messageType: string, subscriber: Subscriber) => void;
    removeSubscriber: (messageType: string, subscriber: Subscriber) => void;
    publishMessage: (message: Message) => void;
}
declare const Organizer: Main;
export { Message, Subscriber, Organizer };
