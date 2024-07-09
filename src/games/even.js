import getRandomInt from '../random.js';
import engineGame from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  engineGame(rules, generateRound);
};

export default startGame;
