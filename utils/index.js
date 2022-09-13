// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// TODO: Create an array of questions for user input

//question function
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

function writeToFile(fileName, data) {

    const template = `name;${data.name}`
    
    fs.writeFile(`${fileName}.md`, template, err => {
        if(err) {
            return console.log(err);
        }
        console.log("Your README file has been generated!")
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your resonses: ", userResponses);
        
        
    }
    catch(err){console.log(err)}

};

// Function call to initialize app
init();
