function findMissingNumber(myArr) {
    const arrLen = myArr.length;
    const n = arrLen + 1;
    const nSum = n * (n + 1) / 2;
    const arrSum = myArr.reduce(getSum, 0);

    if (arrLen === 0) {
        return 1;
    }

    if (arrLen === undefined) {
        return undefined;
    }

    return nSum - arrSum;
    
}


function getSum(total, num) {
    return total + num;
}

export default findMissingNumber;
