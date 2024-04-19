// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs/promises');
const { generateMarkdown } = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    [ "input", "title", "What is your project title?", "defaulttitle", true ],
    [ "confirm", "writeDesc", " Do you want to proceed to update the description?", "", true ],
    [ "input", "descMotivation", " What was your motivation?", "", ((answers) => answers.writeDesc) ],
    [ "input", "descReason", " Why did you build this project?", "", ((answers) => answers.writeDesc) ],
    [ "input", "descSolution", " What problem does it solve?", "", ((answers) => answers.writeDesc) ],
    [ "input", "descLearnings", " What did you learn?", "", ((answers) => answers.writeDesc) ],
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {

    const answer = await inquirer
        .prompt(
            questions.map((question) => {
                return {
                    type: question[ 0 ],
                    name: question[ 1 ],
                    message: question[ 2 ],
                    default: question[ 3 ],
                    when: question[ 4 ],
                }
            }));
    console.log(answer);
    console.log(generateMarkdown(answer));

    await fs.writeFile("README_Generated.md", generateMarkdown(answer));

}

// Function call to initialize app
init();
