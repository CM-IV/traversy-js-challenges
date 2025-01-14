function fizzBuzzArray(numBound) {
    let myArr = [];

    for (let i = 1; i <= numBound; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            myArr.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            myArr.push("Fizz");
        }
        else if (i % 5 === 0) {
            myArr.push("Buzz");
        } else {
            myArr.push(i);
        }
    }

    return myArr;
}

export default fizzBuzzArray;
