"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = exports.timeContextualize = exports.stripHtml = exports.generateRandomString = void 0;
const generateRandomString = ({ length, capitalAlpha, lowerAlpha, numbers }) => {
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
};
exports.generateRandomString = generateRandomString;
const stripHtml = (html) => {
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
};
exports.stripHtml = stripHtml;
const timeContextualize = (date) => {
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    const isPast = seconds > 0;
    seconds = (isPast ? 1 : -1) * seconds;
    var interval = seconds / 31536000;
    const val = (num, suf) => {
        return `${num} ${suf}${num > 1 ? 's' : ''} ` + (isPast ? 'ago' : 'from now');
    };
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
};
exports.timeContextualize = timeContextualize;
function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
exports.shuffleArray = shuffleArray;
;
