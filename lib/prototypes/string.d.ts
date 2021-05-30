declare global {
    interface String {
        encrypt(key?: string): string;
        decrypt(key?: string): string;
        stripHtml(): string;
        random(length?: number): string;
    }
}
export {};
