// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'instruction'
    },

    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'
    },

    {
        type: 'input',
        message: 'Enter contributers',
        name: 'credits'
    },

    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'instruction'
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then ((response)=>{
    console.log(response)
fs.writeFileSync('./README.md',generateMarkdown(response))
})
}

// Function call to initialize app
init();
