//1. Computer will generate a random number.
//2. user input for guessing number.
//3. Compare user input with computer generated number and show result.
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
let userGuessedNumber = randomNumber;
switch (answers) {
    case "randomNumber":
        console.log("Congratulations! You have guessed right number");
        break;
    default:
        console.log("Sorry! you are lost, try again");
}
