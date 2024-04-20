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
  return `# ${title}`;
}

//Function to render the title
function renderDescription(projectMotivation, projectReason, projectSolution, projectLearnings) {
  return `\n\n## Description \n \- ${projectMotivation} \n \- ${projectReason} \n \- ${projectSolution} \n \- ${projectLearnings} \n`;
}

//Function to render the table of contents
function renderTableOfContents(tableofcontents) {
  let contentsList = `\n\n## Table of contents \n`;
  for (let index = 0; index < tableofcontents.length; index++) {
    contentsList += `\ \- \[${tableofcontents[ index ]}\]\(\#${tableofcontents[ index ].toLowerCase()}\) \n`;

  }
  return contentsList;
}

//Function to render the installation
function renderInstallationDetails(installationSteps) {
  return `\n\n## Installation \n\t ${installationSteps} \n`;
}

//Function to render the installation
function renderUsage(usageInstructions, repoLink, appLink) {
  return `\n\n## Usage \n\t ${usageInstructions} \n\n URL for Repository :\(${repoLink}\) \n\n URL for deployed application : \(${appLink}\) \n`;
}

//Function to render the installation
function renderUsageScreenshots(usageScreenshot) {
  //![alt text](assets/images/screenshot.png)
  return `\n\!\[alt text\]\(${usageScreenshot}\) \n`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdownString = "" + renderTitle(data.title)
    + ((data.writeDesc) ? renderDescription(data.descMotivation, data.descReason, data.descSolution, data.descLearnings) : "")
    + ((data.writeInstallation || data.writeUsage || data.writeUsageScreenshot) ? renderTableOfContents([ "Installation", "Usage" ]) : "")
    + ((data.writeInstallation) ? renderInstallationDetails(data.installationSteps) : "")
    + ((data.writeUsage) ? renderUsage(data.usageInstructions, data.usageRepoLink, data.usageAppLink) : "")
    + ((data.writeUsageScreenshot) ? renderUsageScreenshots(data.usageScreenshot) : "")
    ;

  return markdownString;
}

module.exports = {
  generateMarkdown,
};

