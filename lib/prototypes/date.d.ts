declare global {
    interface Date {
        contextualize(date: Date): string;
    }
}
export {};
