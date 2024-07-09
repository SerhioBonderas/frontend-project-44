import getRandomInt from '../random.js';
import engineGame from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGsd = (a, b) => {
  let gsd = 1;
  for (let i = 1; i <= a || i <= b; i += 1) {
    if (a % i === 0 && b % i === 0) {
      gsd = i;
    }
  }
  return gsd;
};

const generateRound = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGsd(num1, num2).toString();
  return [question, correctAnswer];
};

const startGame = () => {
  engineGame(rules, generateRound);
};

export default startGame;
