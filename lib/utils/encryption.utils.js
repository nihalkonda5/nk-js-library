"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const encryptor = require("simple-encryptor");
const encrypt = (text, key = '6HE4Z385an9b5Jja') => {
    return encryptor({
        key,
        hmac: false,
        debug: true
    }).encrypt(text);
};
exports.encrypt = encrypt;
const decrypt = (text, key = '6HE4Z385an9b5Jja') => {
    return encryptor({
        key,
        hmac: false,
        debug: true
    }).decrypt(text);
};
exports.decrypt = decrypt;
