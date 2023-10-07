function calculator(a, b, op) {
    switch(op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            console.log("Incorrect operation");
            throw new Error;
    }
}

export default calculator;
