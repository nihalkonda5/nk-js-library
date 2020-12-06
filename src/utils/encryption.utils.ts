import * as encryptor from 'simple-encryptor';

const encrypt = (text: string, key: string = '6HE4Z385an9b5Jja') => {
    //@ts-ignore
    return encryptor({
        key,
        hmac: false,
        debug: true
    }).encrypt(text);
}

const decrypt = (text: string, key: string = '6HE4Z385an9b5Jja') => {
    //@ts-ignore
    return encryptor({
        key,
        hmac: false,
        debug: true
    }).decrypt(text);
}

export {
    encrypt,
    decrypt
}