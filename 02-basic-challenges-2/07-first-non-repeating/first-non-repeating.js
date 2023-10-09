function findFirstNonRepeatingCharacter(str) {
    const myObj = {};

    for (const char of str) {
        if (myObj.hasOwnProperty(char)) {
            myObj[char] += 1;
        } else {
            myObj[char] = 1;
        }
    }

    for (const char of str) {
        if (myObj[char] === 1) {
            return char;
        }
    }

    return null;
}

export default findFirstNonRepeatingCharacter;
