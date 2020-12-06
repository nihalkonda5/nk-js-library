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
}
interface Subscriber {
    processMessage(message: Message): any;
}
declare class Main {
    subscription: {
        [key: string]: Subscriber[];
    };
    addSubscriberAll: (messageTypes: any, subscriber: Subscriber) => void;
    addSubscriber: (messageType: string, subscriber: Subscriber) => void;
    removeSubscriber: (messageType: string, subscriber: Subscriber) => void;
    publishMessage: (message: Message) => void;
}
declare const Organizer: Main;
export { Message, Subscriber, Organizer };
