declare global {
    interface Date {
        contextualize(date: Date): string;
    }
}

Date.prototype.contextualize = function (date: Date = new Date()) {
    var seconds = Math.floor((date.getTime() - this.getTime()) / 1000);
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

console.log('Date: new fuctions added to prototype');

export { };