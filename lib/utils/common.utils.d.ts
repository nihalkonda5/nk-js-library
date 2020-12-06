declare const generateRandomString: ({ length, capitalAlpha, lowerAlpha, numbers }: {
    length?: number;
    capitalAlpha?: boolean;
    lowerAlpha?: boolean;
    numbers?: boolean;
}) => string;
declare const stripHtml: (html: any) => string;
declare const timeContextualize: (date: Date) => string;
export { generateRandomString, stripHtml, timeContextualize };
