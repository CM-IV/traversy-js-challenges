function findMissingLetter(stringArr) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startIndex = alphabet.indexOf(stringArr[0]);

    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] !== alphabet[startIndex + i]) {
            return alphabet[startIndex + i];
        }
    }

    return "";

}

export default findMissingLetter;
