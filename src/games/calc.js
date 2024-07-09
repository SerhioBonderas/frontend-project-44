import getRandomInt from '../random.js';
import engineGame from '../index.js';

const rules = 'What is the result of the expression?';

const generateRound = () => {
  const arrOperators = ['+', '-', '*'];
  const operator = arrOperators[getRandomInt(0, 2)];
  const firstNum = getRandomInt(0, 50);
  const secondNum = getRandomInt(0, 50);
  const question = `${firstNum} ${operator} ${secondNum}`;
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstNum + secondNum;
      break;
    case '-':
      answer = firstNum - secondNum;
      break;
    case '*':
      answer = firstNum * secondNum;
      break;
  }
  const correctAnswer = answer.toString();
  return [question, correctAnswer];
};

const startGame = () => {
  engineGame(rules, generateRound);
};

export default startGame;
