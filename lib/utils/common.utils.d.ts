declare const _default: {
    generateRandomString: ({ length, capitalAlpha, lowerAlpha, numbers }: {
        length?: number;
        capitalAlpha?: boolean;
        lowerAlpha?: boolean;
        numbers?: boolean;
    }) => string;
    stripHtml: (html: any) => string;
    timeContextualize: (date: Date) => string;
};
export default _default;
