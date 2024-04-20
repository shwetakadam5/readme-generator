// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs/promises');
const { generateMarkdown } = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    [ "input", "title", "What is your project title?", "defaulttitle", true ],
    [ "confirm", "writeDesc", " Do you want to proceed to update the Description?", "", true ],
    [ "input", "descMotivation", " What was your motivation?", "", ((answers) => answers.writeDesc) ],
    [ "input", "descReason", " Why did you build this project?", "", ((answers) => answers.writeDesc) ],
    [ "input", "descSolution", " What problem does it solve?", "", ((answers) => answers.writeDesc) ],
    [ "input", "descLearnings", " What did you learn?", "", ((answers) => answers.writeDesc) ],
    [ "confirm", "writeInstallation", " Do you want to proceed to update the Installation details?", "", true ],
    [ "input", "installationSteps", "Enter the installation details", "", ((answers) => answers.writeInstallation) ],
    [ "confirm", "writeUsage", " Do you want to proceed to update the Usage details?", "", true ],
    [ "input", "usageInstructions", "Enter the Usage instructions", "", ((answers) => answers.writeUsage) ],
    [ "input", "usageRepoLink", "Enter the URL for the repository", "Eg : https://github.com/", ((answers) => answers.writeUsage) ],
    [ "input", "usageAppLink", "Enter the URL for the deployed application", "Eg : https://user.github.io/", ((answers) => answers.writeUsage) ],
    [ "confirm", "writeUsageScreenshot", " Do you want to add a screenshot to Usage details ? ", "", true ],
    [ "input", "usageScreenshot", "Enter the path of the screenshot", "./assets/images/*.*", ((answers) => answers.writeUsageScreenshot) ],

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
