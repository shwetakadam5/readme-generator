// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs/promises');
const { generateMarkdown } = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    [ "input", "title", "What is your project title?", "defaulttitle", true, [] ],
    [ "confirm", "writeDesc", "Do you want to proceed to update the Description?", "", true, [] ],
    [ "input", "descMotivation", "Enter brief description or motivation for your project:", "", ((answers) => answers.writeDesc), [], (function (descMotivation) {

        return (descMotivation != "") ? true : "Brief description about the project is required.";
    }) ],
    [ "input", "descReason", "Why did you build this project?", "", ((answers) => answers.writeDesc), [] ],
    [ "input", "descSolution", "What problem does it solve?", "", ((answers) => answers.writeDesc), [] ],
    [ "input", "descLearnings", "What did you learn from the project?", "", ((answers) => answers.writeDesc), [] ],
    [ "confirm", "writeInstallation", "Do you want to proceed to update the Installation details?", "", true, [] ],
    [ "input", "installationSteps", "Enter the installation details:", "", ((answers) => answers.writeInstallation), [] ],
    [ "confirm", "writeUsage", "Do you want to proceed to update the Usage details?", "", true, [] ],
    [ "input", "usageInstructions", "Enter the Usage instructions:", "", ((answers) => answers.writeUsage), [] ],
    [ "input", "usageRepoLink", "Enter the URL for the repository:", "", ((answers) => answers.writeUsage), [] ],
    [ "input", "usageAppLink", "Enter the URL for the deployed application:", "", ((answers) => answers.writeUsage), [] ],
    [ "confirm", "writeUsageScreenshot", "Do you want to add a screenshot to Usage details? ", "", true, [] ],
    [ "input", "usageScreenshot", "Enter the path of the screenshot:", "./assets/images/*.*", ((answers) => answers.writeUsageScreenshot), [] ],
    [ "confirm", "writeLicense", "Do you want to proceed to update the License details?", "", true, [] ],
    [ "list", "licenseInfo", "Select the License:", "", ((answers) => answers.writeLicense), [ "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause \"Simplified\" License", "BSD 3-Clause \"New\" or \"Revised\" License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense" ] ],
    [ "confirm", "writeQuestions", "Do you want to proceed to update the contact details for Questions?", "", true, [] ],
    [ "input", "questionsGitHubProfile", "Enter your Git Hub Profile:", "https://github.com/defaultusername", ((answers) => answers.writeQuestions), [] ],
    [ "input", "questionsEmailId", "Enter your email address:", "", ((answers) => answers.writeQuestions), [], (function (questionsEmailId) {
        // Regex email id validation
        return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(questionsEmailId) ? true : "Invalid format of email.";
    }) ],
    [ "confirm", "writeContributions", "Do you want to proceed to update the Contributions?", "", true, [] ],
    [ "input", "contributionToRepo", "Enter the github repository name:", "github-profilename/repo-name", ((answers) => answers.writeContributions), [], (function (contributionToRepo) {
        // Regex repository name validation : correct format username/repositoryname : cannot start with special characters and only allowed special character is hyphen and forward slash/
        return /^([a-zA-Z0-9]+[a-zA-Z0-9-]+)+[/]+([-a-z]+)$$/.test(contributionToRepo) ? true : "Invalid format for repository name.";
    }) ],
    [ "confirm", "writeTests", "Do you want to proceed to update the Tests?", "", true, [] ],
    [ "input", "testDetails", "Enter the test details:", "", ((answers) => answers.writeTests), [] ],
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
                    validate: question[ 6 ],
                }
            }));
    console.log(answer);
    console.log(generateMarkdown(answer));

    await fs.writeFile("README_Generated.md", generateMarkdown(answer));

}

// Function call to initialize app
init();


