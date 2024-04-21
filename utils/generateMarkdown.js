// Created a variable to hold the sections to be added in the table of contents
var tableOfContentList = [];

// Function to return the license badge for the license added. If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {

    case "Apache License 2.0":
      return "https://img.shields.io/badge/License-Apache_2.0-green.svg";
    case "GNU General Public License v3.0":
      return "https://img.shields.io/badge/License-GPLv3-blue.svg";
    case "MIT License":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
    case "BSD 2-Clause \"Simplified\" License":
      return "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg";
    case "BSD 3-Clause \"New\" or \"Revised\" License":
      return "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
    case "Boost Software License 1.0":
      return "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    case "Creative Commons Zero v1.0 Universal":
      return "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg";
    case "Eclipse Public License 2.0":
      return "https://img.shields.io/badge/License-EPL_1.0-red.svg";
    case "GNU Affero General Public License v3.0":
      return "https://img.shields.io/badge/License-AGPL_v3-blue.svg";
    case "GNU General Public License v2.0":
      return "https://img.shields.io/badge/License-GPL_v2-blue.svg";
    case "GNU Lesser General Public License v2.1":
      return "https://img.shields.io/badge/License-LGPL_v3-blue.svg";
    case "Mozilla Public License 2.0":
      return "https://img.shields.io/badge/License-MPL_2.0-green.svg";
    case "The Unlicense":
      return "https://img.shields.io/badge/license-Unlicense-blue.svg";
    default: return "";

  }

}

// Function to return the license url link for the license added.If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {

    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "BSD 2-Clause \"Simplified\" License":
      return "https://opensource.org/licenses/BSD-2-Clause";
    case "BSD 3-Clause \"New\" or \"Revised\" License":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "Creative Commons Zero v1.0 Universal":
      return "http://creativecommons.org/publicdomain/zero/1.0/";
    case "Eclipse Public License 2.0":
      return "https://opensource.org/licenses/EPL-1.0";
    case "GNU Affero General Public License v3.0":
      return "https://www.gnu.org/licenses/agpl-3.0";
    case "GNU General Public License v2.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "GNU Lesser General Public License v2.1":
      return "https://www.gnu.org/licenses/lgpl-2.1";
    case "Mozilla Public License 2.0":
      return "https://opensource.org/licenses/MPL-2.0";
    case "The Unlicense":
      return "http://unlicense.org/";
    default: return "";

  }

}

// Function to return the license details of the license added.If there is no license, return an empty string
function renderLicenseSection(license) {

  tableOfContentList.push("License");
  let licenseInfo = `\n\n## License \n`;
  if (renderLicenseLink(license) != "") {
    licenseInfo += `\> \[${license}\]\(${renderLicenseLink(license)}\)`;
  } else {
    licenseInfo += `License Information Unavailable`
  }
  return licenseInfo;

}

//Function to render the title section
function renderTitle(title) {

  return `# ${title}`;

}

//Function to render the description section : This includes adding brief description which is mandatory and other details
function renderDescription(projectMotivation, projectReason, projectSolution, projectLearnings) {

  let descriptionInfo = `\n\n## Description \n`;
  if (projectMotivation != "") {
    descriptionInfo += `\- ${projectMotivation} \n`;
  }

  if (projectReason != "") {
    descriptionInfo += `\- ${projectReason} \n`;
  }

  if (projectSolution != "") {
    descriptionInfo += `\- ${projectSolution} \n`;
  }

  if (projectLearnings != "") {
    descriptionInfo += `\- ${projectLearnings} \n`;
  }

  return descriptionInfo;

}

//Function to render the table of contents section : This include updating the table of contents with appropriate place markers for the contents.
function renderTableOfContents(tableofcontents) {

  let contentsList = `\n\n## Table of contents \n`;
  for (let index = 0; index < tableofcontents.length; index++) {
    contentsList += `\ \- \[${tableofcontents[ index ]}\]\(\#${tableofcontents[ index ].toLowerCase()}\) \n`;

  }
  return contentsList;

}

//Function to render the installation section : This includes updating the installation steps for the project
function renderInstallationDetails(installationSteps) {

  tableOfContentList.push("Installation");
  return `\n\n## Installation \n\t ${installationSteps} \n`;

}

//Function to render the usage section : This includes updating the usage steps and URLs for the repository and the deployed application
function renderUsage(usageInstructions, repoLink, appLink) {

  tableOfContentList.push("Usage");
  let usageInfo = `\n\n## Usage \n\t ${usageInstructions}`;

  if (repoLink == "") {
    usageInfo += `\n\n URL for Repository : 📝 **Update the correct URL** \n`;
  } else {
    usageInfo += `\n\n URL for Repository :  \[${repoLink}\]\(${repoLink}\) \n`;
  }

  if (appLink == "") {
    usageInfo += `\n\n URL for deployed application :📝 **Update the correct URL** \n`;
  } else {
    usageInfo += `\n\n URL for deployed application : \[${appLink}\]\(${appLink}\) \n`;
  }

  return usageInfo;


}

//Function to render the Usage screenshot : This includes adding the usage screenshot of the application/project by checking the given path
//If the jpg file path is default then a highlighting todo note is included.
function renderUsageScreenshots(writeUsage, usageScreenshot) {

  if (!tableOfContentList.includes("Usage")) { tableOfContentList.push("Usage"); }

  let usageScreenshotsInfo = "";

  if (!writeUsage) {
    usageScreenshotsInfo = `\n\n## Usage \n`;
  }

  if (usageScreenshot == "./assets/images/*.*") {
    usageScreenshot = `./assets/images/⛔️`;
    usageScreenshotsInfo += `\n Usage Application Screenshot:\n`
    usageScreenshotsInfo += `\n\!\[Image Unavailable\]\(${usageScreenshot}\) \n`;
  }
  else {
    usageScreenshotsInfo += `\n\!\[Image Unavailable\]\(${usageScreenshot}\) \n`;
  }

  return usageScreenshotsInfo;

}

//Function to render the questions section : This includes appending the GitHub Profile name and Email Address for any queries.
//If the GitHub profile name is not provided then a highlighting todo note is included.
function renderQuestionsSection(gitHubProfile, emailAddress) {

  if (!tableOfContentList.includes("Questions")) { tableOfContentList.push("Questions"); }

  let contactInfo = `\n\n## Questions \n\>\*For any queries, please feel free to contact on the following :\*`;

  if (gitHubProfile == "https://github.com/defaultusername") {
    contactInfo += `\n\>\> \- Git Hub Profile : \<https://github.com/📝 **Update the correct profilename**\>`;
  } else {

    contactInfo += `\n\>\> \- Git Hub Profile : \<${gitHubProfile}\>`;
  }

  contactInfo += `\n\>\> \- E-mail Address : \<${emailAddress}\>`;

  return contactInfo;

}

//Function to render the contributions section : This includes adding the adopted code of conduct badge,
// details on how to contribute and credit the contributors of the repository
function renderContributionsSection(repoName) {

  if (!tableOfContentList.includes("Contributions")) { tableOfContentList.push("Contributions"); }

  let contributionsInfo = `\n\n## Contributions`;
  contributionsInfo += `\n\[\!\[Contributor Covenant\]\(https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg\)\]\(https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md\) \n`
  contributionsInfo += `\n This project welcomes contributions and suggestions and anyone can contribute to this repo.To make sure your contribution aligns with our code of conduct adopted, please make sure to review it before submitting.\n`;

  contributionsInfo += `\n To contribute your own examples, \[fork the repo\]\( https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks\), \[create a new branch\]\(https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/\), make your changes or additions, and then \[submit a pull request\]\(https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requestsabout-branches\).\n`;
  contributionsInfo += `\n Thanks to all the contributors. \n \n \!\[GitHub Contributors Image\]\(https://contrib.rocks/image?repo=${repoName}\)`

  return contributionsInfo;

}

//Function to render the tests section
function renderTestsSection(testDetails) {

  if (!tableOfContentList.includes("Tests")) { tableOfContentList.push("Tests"); }

  let testInfo = `\n\n## Tests`;
  testInfo += `\n \`\`\` \n`
  testInfo += `\n ${testDetails}\n`;
  testInfo += `\n \`\`\` \n`

  return testInfo;

}

// A function to generate completed markdown for README
function generateMarkdown(data) {
  let markdownString = ((data.writeLicense && renderLicenseBadge(data.licenseInfo) != "" && renderLicenseLink(data.licenseInfo) != "") ? `\[\!\[License\]\(${renderLicenseBadge(data.licenseInfo)}\)\]\(${renderLicenseLink(data.licenseInfo)}\)` : `\n`)
    + "\n\n"
    + renderTitle(data.title)
    + ((data.writeDesc) ? renderDescription(data.descMotivation, data.descReason, data.descSolution, data.descLearnings) : "")
    + ((data.writeInstallation || data.writeUsage || data.writeUsageScreenshot || data.writeLicense || data.writeQuestions || data.writeContributions || data.writeTests) ? renderTableOfContents(tableOfContentList) : "")
    + ((data.writeInstallation) ? renderInstallationDetails(data.installationSteps) : "")
    + ((data.writeUsage) ? renderUsage(data.usageInstructions, data.usageRepoLink, data.usageAppLink) : "")
    + ((data.writeUsageScreenshot) ? renderUsageScreenshots(data.writeUsage, data.usageScreenshot) : "")
    + ((data.writeLicense) ? renderLicenseSection(data.licenseInfo) : "")
    + ((data.writeQuestions) ? renderQuestionsSection(data.questionsGitHubProfile, data.questionsEmailId) : "")
    + ((data.writeContributions) ? renderContributionsSection(data.contributionToRepo) : "")
    + ((data.writeTests) ? renderTestsSection(data.testDetails) : "")
    ;

  return markdownString;
}

// To enable modularization
module.exports = {
  generateMarkdown,
};

