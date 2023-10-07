function removeDuplicates(myArr) {
    let dedupedArr = [];
    
    const mySet = new Set(myArr);

    mySet.forEach((val) => {
        dedupedArr.push(val);
    })

    return dedupedArr;
}

export default removeDuplicates;
