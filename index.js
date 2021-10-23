// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = ['What is your Github username? (Required)', 'What is your email address? (Required)', "What is your project's name? (Required)",
    "Please write a short description of your project: (Required)", "What kind of license should your project have?",
    "What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"];

[github, email, projectName, description, license, install, tests, usingRepo, contribute] = questions;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: github,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: email,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: projectName,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You need to enter a project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: description,
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: license,
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'install',
            message: install,
            default: 'npm i'
        },
        {
            type: 'input',
            name: 'tests',
            message: tests,
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'usingRepo',
            message: usingRepo
        },
        {
            type: 'input',
            name: 'contribute',
            message: contribute
        },
    ])
}
// Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// Create a function to initialize app
function init() {
    promptUser()
        .then(readmeData => {
            return generateMarkdown(readmeData);
        })
        .then(readmeContent => {
            return writeToFile('./dist/README.md', readmeContent);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
