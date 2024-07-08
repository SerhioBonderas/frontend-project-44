import readlineSync from 'readline-sync';

const engineGame = (rules, generateRound) => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(rules);
    for (let i = 0; i < 3; i += 1) {
        const gameData = generateRound();
        const question = gameData[0];
        const correctAnswer = gameData[1];
        console.log(`Question: ${question}`);
        const userResponse = readlineSync.question('Your answer: ');
        if (correctAnswer === userResponse) {
            console.log('Correct!');
        } else { return console.log(`'${userResponse}' is wrong answer ;\(.Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`); };
    };
    return console.log(`Congratulations, ${userName}!`);
};

export default engineGame;