// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs/promises');

// TODO: Create an array of questions for user input
const questions = [
    [ "input", "titleInput", "What is your project title?", "defaulttitle" ],
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
                }
            }));
    console.log(answer);
}

// Function call to initialize app
init();
