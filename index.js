import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.italic.cyanBright("\n\tWord Counter by 'MARIA YASIR'\n"));
console.log("=".repeat(50));
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence"
    }
]);
//trimming the sentence and splitting it into words  based on "spaces"
let words = answer.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(50));
console.log(chalk.bold.italic("Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Words Count: ${chalk.bold.red(words.length)}`));
