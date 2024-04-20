// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs/promises');
const { generateMarkdown } = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    [ "input", "title", "What is your project title?", "defaulttitle", true, [] ],
    [ "confirm", "writeDesc", "Do you want to proceed to update the Description?", "", true, [] ],
    [ "input", "descMotivation", "What was your motivation?", "", ((answers) => answers.writeDesc), [] ],
    [ "input", "descReason", "Why did you build this project?", "", ((answers) => answers.writeDesc), [] ],
    [ "input", "descSolution", "What problem does it solve?", "", ((answers) => answers.writeDesc), [] ],
    [ "input", "descLearnings", "What did you learn?", "", ((answers) => answers.writeDesc), [] ],
    [ "confirm", "writeInstallation", "Do you want to proceed to update the Installation details?", "", true, [] ],
    [ "input", "installationSteps", "Enter the installation details:", "", ((answers) => answers.writeInstallation), [] ],
    [ "confirm", "writeUsage", "Do you want to proceed to update the Usage details?", "", true, [] ],
    [ "input", "usageInstructions", "Enter the Usage instructions:", "", ((answers) => answers.writeUsage), [] ],
    [ "input", "usageRepoLink", "Enter the URL for the repository:", "", ((answers) => answers.writeUsage), [] ],
    [ "input", "usageAppLink", "Enter the URL for the deployed application:", "", ((answers) => answers.writeUsage), [] ],
    [ "confirm", "writeUsageScreenshot", "Do you want to add a screenshot to Usage details? ", "", true, [] ],
    [ "input", "usageScreenshot", "Enter the path of the screenshot:", "./assets/images/sampleImage.jpg", ((answers) => answers.writeUsageScreenshot), [] ],
    [ "confirm", "writeLicense", "Do you want to proceed to update the License details?", "", true, [] ],
    [ "list", "licenseInfo", "Select the License:", "", ((answers) => answers.writeLicense), [ "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause \"Simplified\" License", "BSD 3-Clause \"New\" or \"Revised\" License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense" ] ],

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
                    choices: question[ 5 ],
                }
            }));
    console.log(answer);
    console.log(generateMarkdown(answer));

    await fs.writeFile("README_Generated.md", generateMarkdown(answer));

}

// Function call to initialize app
init();
