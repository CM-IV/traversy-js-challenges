function arrayIntersection(firstArr, secondArr) {
    let finalArr = [];
    const secondSet = new Set(secondArr);

    for (const el of firstArr) {
        if (secondSet.has(el)) {
            finalArr.push(el);
        }
    }

    return finalArr;
}

export default arrayIntersection;
