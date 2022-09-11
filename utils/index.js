// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

//question function
const promptUser = () => {

    return inquirer.prompt([
        
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
            message: 'Would ',
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
            type: 'input',
            name: 'github', 
            message: 'Enter your GitHub Username (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Enter your GitHub username.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github', 
            message: 'Enter the link to your GitHub profile (Required).',
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
            message: 'Please provide your email or another way of contact.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide an option of contact.')
                    return false;
                }
            }
        },
    ]);
};

//questions for app//title: what is the title of your project

//description: please provide a descriotion of your project
    //Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

    // - What was your motivation?
    // - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    // - What problem does it solve?
    // - What did you learn?

//ToC: Do you want to add a table of contents(if your readme is too long add a table of contents)
    // - [Installation](#installation)
    // - [Usage](#usage)
    // - [Credits](#credits)
    // - [License](#license)

//Installation: What are the steps required to install your project?
    //(provide a step by step guide)

//Usage: Provide instructions and examples for use.(include screenshots as needed)

//Credits: List your collaborators, if any, with links to their GitHub profiles.
    //If you used any third-party assets that require attribution, list the creators 
    //with links to their primary web presence in this section.
    //If you followed tutorials, include links to those here as well.

    // 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
    // Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

    // ## Features
    
    // If your project has a lot of features, list them here.
    
    // ## How to Contribute
    
    // If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
    // ## Tests
    
    // Go the extra mile and write tests for your application. Then provide examples on how to run them here.
//fin

// TODO: Create a function to write README file

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
