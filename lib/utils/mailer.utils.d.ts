declare const loadMailerAPI: (email: string, password: string) => void;
declare const sendMail: ({ from, to, subject, text }: {
    from: string;
    to: string;
    subject: string;
    text: string;
}) => Promise<unknown>;
export { loadMailerAPI, sendMail };
