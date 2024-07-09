import getRandomInt from '../../src/random.js';
import engineGame from '../../src/index.js';

const rules = 'Answer "yes" if given number is prime.Otherwise answer "no".';

const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

const generateRound = () => {
    const num = getRandomInt(2, 100);
    const question = num.toString();
    let correctAnswer = isPrime(num) ? 'yes' : 'no';
    return [question, correctAnswer];
};

const startGame = () => {
    engineGame(rules, generateRound);
};

export { startGame };