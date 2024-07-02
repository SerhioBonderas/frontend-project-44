import readlineSync from 'readline-sync';

const userGreeting = () => {
    console.log("Welcome to the Brain Games!");
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
}
export default userGreeting;
