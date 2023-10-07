function isPalindrome(myStr) {
    const formattedStr = myStr.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseStr = formattedStr.split("").reverse().join("");

    return formattedStr === reverseStr;
}

export default isPalindrome;
