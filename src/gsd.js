import readlineSync from 'readline-sync';

const getRandomInt = (int) => {
    return Math.floor(Math.random() * int);
};

const getGsd = (a, b) => {
    let gsd = 1;
    for (let i = 1; i <= a || i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gsd = i;
        }
    }
    return gsd;
};

const brainGsd = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!\nFind the greatest common divisor of given numbers.`);
    for (let i = 0; i < 3; i += 1) {
        let num1 = getRandomInt(100);
        let num2 = getRandomInt(100);
        console.log(`Question: ${num1} ${num2}`);
        let correctAnswer = getGsd(num1, num2);
        let userResponse = Number(readlineSync.question('Your answer: '));
        if (correctAnswer === userResponse) {
            console.log('Correct!');
        }
        else {
            return console.log(`${userResponse} is wrong answer ;\(.Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
        };
    }
    return console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt, getGsd, brainGsd };