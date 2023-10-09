function displayLikes(strArr) {
    const strLen = strArr.length;

    switch (strLen) {
        case 0:
            return "no one likes this";
        case 1:
            return `${strArr[0]} likes this`
        case 2:
            return `${strArr[0]} and ${strArr[1]} like this`
        case 3:
            return `${strArr[0]}, ${strArr[1]} and ${strArr[2]} like this`
        default:
            const newLen = strLen - 2;
            return `${strArr[0]}, ${strArr[1]} and ${newLen} others like this`
    }
}

export default displayLikes;
