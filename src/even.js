import readlineSync from 'readline-sync';

const getRandomInt = (int) => {
  return Math.floor(Math.random() * int);
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    let num = getRandomInt(100);
    let correctAnswer = '';
    console.log(`Question: ${num}`);
    let userResponse = readlineSync.question('Your answer: ');
    if (num % 2 === 0) {
      correctAnswer = 'yes'
      if (correctAnswer === userResponse) {
        console.log('Correct!');
      } else {
        return console.log(`${userResponse} is wrong answer ;\(.Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      };
    } else if (num % 2 !== 0) {
      correctAnswer = 'no';
      if (correctAnswer === userResponse) {
        console.log('Correct!');
      } else {
        return console.log(`${userResponse} is wrong answer ;\(.Correct answer was 'no'.\nLet's try again, ${userName}!`);
      };
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export { getRandomInt, brainEven };

