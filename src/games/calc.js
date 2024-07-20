import getRandomInt from '../random.js';
import engineGame from '../index.js';

const rules = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  let result = null;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
  }

  return result;
};

const generateRound = () => {
  const arrOperators = ['+', '-', '*'];
  const operator = arrOperators[getRandomInt(0, 2)];
  const firstNum = getRandomInt(0, 50);
  const secondNum = getRandomInt(0, 50);
  const question = `${firstNum} ${operator} ${secondNum}`;
  const correctAnswer = calculate(firstNum, secondNum, operator).toString();

  return [question, correctAnswer];
};

const startGame = () => {
  engineGame(rules, generateRound);
};

export default startGame;
