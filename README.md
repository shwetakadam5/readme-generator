# readme-generator

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- Every open source project on GitHub requires a good wality professional README explaining what the application is for, how to use the app, how to install it and also allow other developers to make contributions to the project for its success.
- This project was to automate the generation of a README file by using a command-line application.
- This allows the developer to devote more time to working on the project and also to ensure that all the required details of the application is made available to the users through a concise README in much less time.
- During this implementation, I was able to apply my knowledge on node.js, initialization and installation of npm dependencies, read-write files, modularization, Basic and Advanced inquirer. 

## Table of Contents 

- [Installation](#installation)
- [User Story](#user-story)
- [Usage](#usage)
- [Acceptance Criteria](#acceptance-criteria)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation

Follow these instructions to create your project and deploy it to GitHub Pages:

1. Create a new repository on your GitHub account and clone it to your computer.

2. When you're ready to deploy, use the git add, git commit, and git push commands to save and push your code to your GitHub repository.

3. Navigate to your GitHub repository in the browser and then select the Settings tab on the right side of the page.

4. On the Settings page, select Pages on the left side of the page. On the GitHub Pages screen, choose main in the dropdown under Branch. Click the Save button.

5. Navigate to <your-github-username.github.io/your-repository-name> and you will find that your new webpage has gone live! For example, if your GitHub username is "lernantino" and the project is "css-demo-site", then your URL would be <lernantino.github.io/css-demo-site>.

## User-Story 
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Usage

Open the terminal and navigate to the project path **\readme-generator , run the command npm start and answer the questions prompts.
On completion all the questions, a README_Generated.md file will be generated from the inputs provided by the user.

Link for the repository : 

https://github.com/shwetakadam5/readme-generator

Link for the functionality demo : 

## Acceptance-Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```


## Tests

### Test1 : When all the questions prompts are answered with Y and provided relevant answers to the questions presented a README_Generated.md file is generated with all the sections updated accordingly. 

### Test2 : When the user provides the project title and confirms to update the description, the first question to provide brief description is mandatory. if user provides blank value then an error is presented "Brief description about the project is required." All other details of the description are optional.

### Test3 : For the questions that have a default value available, if the user provides without providing the value, the default value will be updated in the README. 
>Default Values :
>>Project Title - defaultvalue :  defaulttitle  
>>All confirmation prompts asking if user wishes to proceed updating a particular section - defaultvalue : N     
>>Usage screenshot path - defaultvalue : (./assets/images/*.*)    
>>Git Hub Profile - defaultvalue : https://github.com/defaultusername   
>>Github Repository name - defaultvalue : github-profilename/repo-name  


### Test4 : When the user agrees to update the contact details for Questions section and if user provides incorrect format for the email id then an error is displayed to the user:  "Invalid format of email." 

### Test5 : When the user agrees to update the Contributors section and if user provides incorrect format for the repository name then an error is displayed to the user:  "Invalid format for repository name." 

### Test6 : The table of contents are updated based on the sections added by the user.

### Test7 : If the user choose the license from the list of options provided, the license link is updated under the license section and a license badge is added on top of the README.

### Test8 : If the user updates the contributions section, then the code of coduct is displayed and list of all contributors for the repository are displayed.


### Test9 : If the user leaves the fields of the Repository URL, Deployed application URL , GITHUB Repository Name, GITHUB profile name , then the README is updated with indicators or highlighters against those details so that the correct values are updated manually by the user.
>Highlighters/Indicators to update with correct values manually 
>>URL for Repository : 📝 Update the correct URL    
>>URL for deployed application :📝 Update the correct URL    
>>Git Hub Profile : <https://github.com/📝 **Update the correct profilename**>   
>>If the screenshots path is not provided with filename under USAGE : ![Image Unavailable](./assets/images/⛔️)    

## Credits

https://www.npmjs.com/package/inquirer/v/8.2.4


## License

MIT

