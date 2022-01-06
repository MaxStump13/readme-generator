// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generate = require("./utils/generateMarkdown.js")
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
        name: "contributing"
    },    {
        type: "input",
        message: "What tests are available for this application",
        name: "tests"
    },
    {
        type: "list",
        message: "Which license would you like to use?",
        name: "license",
        choices: ["MIT", "Apache","GNU"]
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
function writeToFile(fileName, data) {
    fs.writeFile(`./generated/${fileName}.md`,data,(err) =>
    err ? console.log(err) : console.log('Successfully created index.html!'))
}

// TODO: Create a function to initialize app
function init() {}
inquirer
.prompt(questions)
.then(function(answers){
    console.log(answers);
    const fileN = `${answers.title.toLowerCase().split(" ").join("")}`;
    const md = generate(answers);    
    writeToFile(fileN, md);
})
// Function call to initialize app
init();
