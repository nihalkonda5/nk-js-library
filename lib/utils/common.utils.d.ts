declare const generateRandomString: ({ length, capitalAlpha, lowerAlpha, numbers }: {
    length?: number;
    capitalAlpha?: boolean;
    lowerAlpha?: boolean;
    numbers?: boolean;
}) => string;
declare const stripHtml: (html: any) => string;
declare const timeContextualize: (date: Date) => string;
declare function shuffleArray<T>(array: T[]): T[];
export { generateRandomString, stripHtml, timeContextualize, shuffleArray };
