// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

//Function to render the title
function renderTitle(title) {
  return `# ${title}\n\n`;
}

//Function to render the title
function renderDescription(projectMotivation, projectReason, projectSolution, projectLearnings) {
  return `## Description \n \- ${projectMotivation} \n \- ${projectReason} \n \- ${projectSolution} \n \- ${projectLearnings} \n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdownString = "" + renderTitle(data.title) + renderDescription(data.descMotivation, data.descReason, data.descSolution, data.descLearnings);

  return markdownString;
}

module.exports = {
  generateMarkdown,
};

