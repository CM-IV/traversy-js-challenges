function titleCase(myString) {
    const pattern = /\b\w/g;

    const result = myString.replace(pattern, (s) => s.toUpperCase());

    return result;
}

export default titleCase;
