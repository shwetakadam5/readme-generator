var tableOfContentList = [];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

//Function to render the title
function renderTitle(title) {
  return `# ${title}`;
}

//Function to render the title
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

  //return `\n\n## Description \n \- ${projectMotivation} \n \- ${projectReason} \n \- ${projectSolution} \n \- ${projectLearnings} \n`;
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
  tableOfContentList.push("Installation");
  return `\n\n## Installation \n\t ${installationSteps} \n`;
}

//Function to render the installation
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

//Function to render the installation
function renderUsageScreenshots(usageScreenshot) {
  if (!tableOfContentList.includes("Usage")) { tableOfContentList.push("Usage"); }

  if (usageScreenshot == "./assets/images/*.*") {
    usageScreenshot = `./assets/images/⛔️`;
    return `\n\!\[Image Unavailable\]\(${usageScreenshot}\) \n`;
  }
  else {
    return `\n\!\[Image Unavailable\]\(${usageScreenshot}\) \n`;
  }


}



//Function to render the installation
function renderQuestionsSection(gitHubProfile, emailAddress) {
  if (!tableOfContentList.includes("Questions")) { tableOfContentList.push("Questions"); }
  //https://github.com/shwetakadam5
  let contactInfo = `\n\n## Questions \n\>\*For any queries, please feel free to contact on the following :\*`;

  contactInfo += `\n\>\> \- Git Hub Profile : \<${gitHubProfile}\>`;

  contactInfo += `\n\>\> \- E-mail Address : \<${emailAddress}\>`;

  return contactInfo;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdownString = ((data.writeLicense && renderLicenseBadge(data.licenseInfo) != "" && renderLicenseLink(data.licenseInfo) != "") ? `\[\!\[License\]\(${renderLicenseBadge(data.licenseInfo)}\)\]\(${renderLicenseLink(data.licenseInfo)}\)` : `\n`)
    + "\n\n"
    + renderTitle(data.title)
    + ((data.writeDesc) ? renderDescription(data.descMotivation, data.descReason, data.descSolution, data.descLearnings) : "")
    + ((data.writeInstallation || data.writeUsage || data.writeUsageScreenshot || data.writeLicense) ? renderTableOfContents(tableOfContentList) : "")
    + ((data.writeInstallation) ? renderInstallationDetails(data.installationSteps) : "")
    + ((data.writeUsage) ? renderUsage(data.usageInstructions, data.usageRepoLink, data.usageAppLink) : "")
    + ((data.writeUsageScreenshot) ? renderUsageScreenshots(data.usageScreenshot) : "")
    + ((data.writeLicense) ? renderLicenseSection(data.licenseInfo) : "")
    + ((data.writeQuestions) ? renderQuestionsSection(data.questionsGitHubProfile, data.questionsEmailId) : "")
    ;

  return markdownString;
}

module.exports = {
  generateMarkdown,
};

