declare global {
    interface String {
        encrypt(): string;
        decrypt(): string;
        stripHtml(): string;
        random(): string;
    }
}
export {};
