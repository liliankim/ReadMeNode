// TODO: Include packages needed for this application
//the below three lines are requiring the node packages that we need to use"
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
        type: 'list',
        message: 'Enter licensing information',
        name: 'license',
        choices: ['MIT','GNU', 'IBM', 'ISC']
    },

    {
        type: 'input',
        message: 'Enter contributers',
        name: 'credits'
    },

    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'tests'
    },

    {
        type: 'input',
        message: 'What is your GitHub Username',
        name: 'username'
    },

{
    type: 'input',
    message: 'What is your email',
    name: 'email'
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
