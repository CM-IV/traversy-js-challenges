function areAllCharactersUnique(str) {
    const mySet = new Set();

    if (str === "") {
        return true;
    }

    for (let p = 0; p < str.length; p++) {
        const char = str[p];

        if (mySet.has(char)) {
            return false;
        }

        mySet.add(char);
    }

    return true;
}

export default areAllCharactersUnique;
