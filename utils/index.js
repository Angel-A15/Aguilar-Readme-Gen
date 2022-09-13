// Packages and links 
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

//Question function
const questions = [

        {
            type: 'input',
            name: 'name', 
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please insert a name.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description', 
            message: 'Please provide a brief description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please insert a description.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature', 
            message: 'If applicable, include a Table of Contents.(If your README is longer than average, you may want to consider)',
            default: false
        },
        {
            type: 'confirm',
            name: 'feature', 
            message: 'If applicable, include a clear way to install the application. ',
            default: false
        },
        {
            type: 'confirm',
            name: 'feature', 
            message: 'If applicable, include step by step insructions on how to use the application.',
            default: false
        },
        {
            type: 'confirm',
            name: 'feature', 
            message: 'If applicable, include any licenses.(Licenses will appear at the top of the README as a badge)',
            default: false
        },
        {
            type: 'confirm',
            name: 'feature', 
            message: 'If applicable, include a method of contribution.',
            default: false
        },
        {
            type: 'confirm',
            name: 'feature', 
            message: 'If applicable, include tests for your application and examples on how to run them here.',
            default: false
        },
        {
            type: 'confirm',
            name: 'feature', 
            message: 'If applicable, provide a method to reach you for questions.',
            default: false
        },
        {
            type: 'input',
            name: 'github', 
            message: 'Enter the link to your GitHub profile (Will display in section: questions).',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter the link to your GitHub profile.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description', 
            message: 'Please provide your email or another way to reach you.(Will display in section:)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide an option of contact.')
                    return false;
                }
            }
        },
];

//Function to construct the README
function writeToFile(fileName, data) {

    const template = `name;${data.name}`

    fs.writeFile(`${fileName}.md`, template, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Your README file has been generated!")
    });
}

// Function to initialize the app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your resonses: ", userResponses);
        
        //Will write the markdown into file
        await writeFileAsync('ExampleREADME.md', markdown);
        
    }
    catch(err){console.log(err)}

};

// Function call to initialize app
init();
