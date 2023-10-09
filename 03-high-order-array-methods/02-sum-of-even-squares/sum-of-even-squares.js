function sumOfEvenSquares(numArr) {
    if (numArr.length === 0) {
        return 0;
    }

    const evens = numArr.filter(findEven);

    const squaredNums = evens.map((n) => n * n);

    const sum = squaredNums.reduce(sumEvenSquare, 0);

    return sum;
}

function findEven(num) {
    if (num % 2 === 0) {
        return num;
    }
}

function sumEvenSquare(total, start) {
    return total + start;
}

export default sumOfEvenSquares;
