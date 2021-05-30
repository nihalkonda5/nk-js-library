import * as encryptor from 'simple-encryptor';

declare global {
    interface String {
        encrypt(): string;
        decrypt(): string;
        stripHtml(): string;
        random(): string;
    }
}

String.prototype.random = function (length: number = 10): string {
    let result = '';
    const characters = (this.match("[A-Z]") ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '') +
        (this.match("[a-z]") ? 'abcdefghijklmnopqrstuvwxyz' : '') +
        (this.match("[0-9]") ? '0123456789' : '');
    const charactersLength = characters.length;
    if (charactersLength === 0)
        return '';
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

String.prototype.encrypt = function (key: string = '6HE4Z385an9b5Jja') {
    //@ts-ignore
    return encryptor({
        key,
        hmac: false,
        debug: true
    }).encrypt(this);
}

String.prototype.decrypt = function (key: string = '6HE4Z385an9b5Jja') {
    //@ts-ignore
    return encryptor({
        key,
        hmac: false,
        debug: true
    }).decrypt(this);
}

String.prototype.stripHtml = function () {
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = this;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

console.log('String: new fuctions added to prototype');

export { };