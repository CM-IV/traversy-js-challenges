function reverseString(myString) {
    const charsArr = myString.split("");

    const reverseString = charsArr.reverse();

    const res = reverseString.join("");

    return res;
}

export default reverseString;
