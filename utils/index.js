// Packages and Links 
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

//Question Function
const questions = [

    //Title
    {
        type: 'input',
        name: 'title', 
        message: 'What is the name of your project?',
        validate: your_Input => {
            if (your_input) {
                return true;
            } else {
                console.log('Please insert a name.')
                return false;
            }
        }
    },
    //Description
    {
        type: 'input',
        name: 'description', 
        message: 'Please provide a brief description of your project.',
        validate: your_description => {
            if (your_description) {
                return true;
            } else {
                console.log('Please insert a description.')
                return false;
            }
        }
    },
    //Table of Contents
    {
        type: 'input',
        name: 'Toc', 
        message: 'If applicable, include a Table of Contents.(If your README is longer than average, you may want to consider)',
        validate: your_Toc => {
            if (your_Toc) {
                return true;
            } else {
                console.log('Please insert a description.')
                return false;
            }
        }
    },
    //Installation
    {
        type: 'input',
        name: 'installation', 
        message: 'If applicable, include a clear way to install your project. ',
        validate: your_installation => {
            if (your_installation) {
                return true;
            } else {
                console.log('Please insert a description.')
                return false;
            }
        }
    },
    //Use
    {
        type: 'input',
        name: 'usage', 
        message: 'If applicable, include step by step insructions on how to use the application.',
        validate: your_usage => {
            if (your_usage) {
                return true;
            } else {
                console.log('Please insert a description.')
                return false;
            }
        }
    },
    //License
    {
        type: 'checkbox',
        name: 'license', 
        message: 'If applicable, include a licenses.(License will appear at the top of the README as a badge)',
        choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above', 'N/A'],
        validate: your_license => {
            if (your_license) {
                return true;
            } else {
                console.log('Please select a license.')
                return false;
            }
        }
    },
    //Contribution
    {
        type: 'input',
        name: 'contribution', 
        message: 'If applicable, include a method of contribution.',
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            } else {
                console.log('Please provide information on how to contribute.')
                return false;
            }
        }
    },
    //Test
    {
        type: 'input',
        name: 'test', 
        message: 'How does the user test this project?',
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log('Explain how to test this project.')
                return false;
            }
        }
    },
    //GitHub Username
    {
        type: 'input',
        name: 'github', 
        message: 'Enter your GitHub Username(Required)',
        validate: github_input => {
            if (github_input) {
                return true;
            } else {
                console.log('Please enter your GitHub Username.')
                return false;
            }
        }
    },
    //GitHub Profile
    {
        type: 'input',
        name: 'GhProfile', 
        message: 'Enter the link to your GitHub profile (Will display in section: questions).',
        validate: GhProfile_input => {
            if (GhProfile_input) {
                return true;
            } else {
                console.log('Enter the link to your GitHub profile.')
                return false;
            }
        }
    },
    //Email Address
    {
        type: 'input',
        name: 'email', 
        message: 'Please provide your email address.',
        validate: email_input => {
            if (email_input) {
                return true;
            } else {
                console.log('Please provide your email address.')
                return false;
            }
        }
    },
];

//Function to construct the README
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {

        if (err){
            return console.log(err);
        }
     console.log("You can preview your README file!")
    });

};

// Function to initialize the app

async function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });

};

// Function call to initialize app
init();
