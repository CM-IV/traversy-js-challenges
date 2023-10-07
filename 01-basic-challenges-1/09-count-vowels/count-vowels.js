function countVowels(myStr) {
    const matchArr = myStr.toLowerCase().match(/[aeiou]/gi);

    return matchArr.length;
}

export default countVowels;
