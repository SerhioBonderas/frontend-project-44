import getRandomInt from '../../src/random.js';
import engineGame from '../../src/index.js';

const rules = 'What number is missing in the progression?';

const getProgression = (startElement, step, length) => {
    let result = [startElement];
    let element = startElement;
    for (let i = 0; i < length; i += 1) {
        element = element + step;
        result.push(element);
    };
    return result;
};

const generateRound = () => {
    const startElement = getRandomInt(0, 5);
    const step = getRandomInt(1, 5);
    const length = getRandomInt(6, 10);
    const progression = getProgression(startElement, step, length);
    const emptyPlace = getRandomInt(startElement, length);
    const correctAnswer = progression[emptyPlace].toString();
    progression[emptyPlace] = '..';
    const question = progression.join(' ');
    return [question, correctAnswer];
};

const startGame = () => {
    engineGame(rules, generateRound);
};
export default startGame;