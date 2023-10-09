function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function diceGameSimulation(numSimulations) {
    const resArr = [];

    for (let i = 0; i < numSimulations; i++) {
        const dice1 = rollDice();
        const dice2 = rollDice();
        const sum = dice1 + dice2;

        if (sum === 7 || sum === 11) {
            resArr.push({ dice1: dice1, dice2: dice2, sum: sum, result: "win"});
        } else if (sum === 2 || sum === 3 || sum === 12) {
            resArr.push({ dice1: dice1, dice2: dice2, sum: sum, result: "lose"});
        } else {
            resArr.push({ dice1: dice1, dice2: dice2, sum: sum, result: "roll again"});
        }
    }

    return resArr;
}

export default diceGameSimulation;
