// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// const utils = require("./utils")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a bried description of the project",
        name: "description"
    },    {
        type: "input",
        message: "What installations are required for the application",
        name: "installation"
    },    {
        type: "input",
        message: "How is the application used",
        name: "usage"
    },    {
        type: "input",
        message: "Who were the contributors to the application",
        name: "contributions"
    },    {
        type: "input",
        message: "What tests are available for this application",
        name: "tests"
    },
    {
        type: "list",
        message: "Which license would you like to use?",
        name: "license",
        choices: ["MIT", "Apache","GNU",""]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
inquirer
.prompt(questions)
.then(function(data){
    writeToFile(questions[0].name,data)
})
// Function call to initialize app
init();
