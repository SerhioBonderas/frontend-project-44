import readlineSync from 'readline-sync';

const getRandomInt = (int) => {
    return Math.floor(Math.random() * int);
};

const getRandomOperator = () => {
    const arr = ['+', '-', '*'];
    let operator = arr[getRandomInt(3)];
    return operator;
};

const brainCalc = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\nWhat is the result of the expression?`);
    for (let i = 0; i < 3; i += 1) {
        let operator = getRandomOperator();
        let firstNum = getRandomInt(100);
        let secondNum = getRandomInt(100);
        console.log(`Question: ${firstNum} ${operator} ${secondNum}`);
        let correctAnswer = 0;
        let userResponse = Number(readlineSync.question('Your answer: '));
        switch (operator) {
            case '+':
                correctAnswer = firstNum + secondNum;
                break;
            case '-':
                correctAnswer = firstNum - secondNum;
                break;
            case '*':
                correctAnswer = firstNum * secondNum;
                break;
        };
        if (correctAnswer === userResponse) {
            console.log('Correct!');
        } else {
            return console.log(`${userResponse} is wrong answer ;\(.Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
        };
    }
    return console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt, getRandomOperator, brainCalc };

