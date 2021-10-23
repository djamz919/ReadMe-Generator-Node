// Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./src/page-template');

// Create an array of questions for user input
const questions = ['What is your Github username?', 'What is your email address?', "What is your project's name?", "Please write a short description of your project:", "What kind of license should your project have?",
"What command should be run to install dependencies?", "What command should be run to run tests?", "What does the user need to know about using the repo?", "What does the user need to know about contributing to the repo?"];
[name, email, projectName, projectDesc, license, install, tests, usingRepo, contribute] = questions;

// Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {}

// Function call to initialize app
init();
