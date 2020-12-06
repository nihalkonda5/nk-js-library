const generateRandomString = (
    {
        length,
        capitalAlpha,
        lowerAlpha,
        numbers
    }: {
        length?: number,
        capitalAlpha?: boolean,
        lowerAlpha?: boolean,
        numbers?: boolean
    }) => {
    length = length || 10;
    let result = '';
    const characters = (capitalAlpha ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
        (lowerAlpha ? 'abcdefghijklmnopqrstuvwxyz' : '') +
        (numbers ? '0123456789' : '');
    const charactersLength = characters.length;
    if (charactersLength === 0)
        return '';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const stripHtml = (html) => {
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

const timeContextualize = (date: Date) => {
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    const isPast = seconds > 0;
    seconds = (isPast ? 1 : -1) * seconds;

    var interval = seconds / 31536000;

    const val = (num: number, suf: string) => {
        return `${num} ${suf}${num > 1 ? 's' : ''} ` + (isPast ? 'ago' : 'from now');
    }

    if (interval > 1) {
        return val(Math.floor(interval), 'year');
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return val(Math.floor(interval), 'month');
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return val(Math.floor(interval), 'day');
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return val(Math.floor(interval), 'hour');
    }
    interval = seconds / 60;
    if (interval > 1) {
        return val(Math.floor(interval), 'minute');
    }
    return val(Math.floor(seconds), 'second');
}

export default {
    generateRandomString,
    stripHtml,
    timeContextualize
}