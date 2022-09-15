# Readme-Generator

## Project
As a developer, I want to create an application that generates a README file for me/others. This would decrease the time spent on creating one myself/others and increase time in productivity on the codebase.

Im building the application based on these credentials:

* A series of prompts that ask for information from the user to base the README construction
* After being prompted for information then a high-quality, professional README.md is generated with:
  * The title of my project and sections entitled Description
  * Table of Contents
  * Installation 
  * Usage
  * License 
  * Contributing
  * Tests
  * Questions
  
* The generated README reflects exactly what was inserted in the prompts by the user

## Description
For my application to work as intended, I decided to do the following:

* Install of NPM inquirer(package 8.2.4)
  * Enable the use of third party modules to use for project
  
* A codebase incorperated with traditional JS, JQuery, and Node.Js that allowed us to:
  * Write interactive questions to base the README off of
  * Functions that write, copy, and add data in its designated area in the README

## Installation
The user will have to copy the project from the repository into their console before use

## Usage
1. Downloaded into user console
2. In the terminal, change directory into downloaded folder and then change directoy to the internal folder "utils"
3. User will then enter node index.js to start
4. Provide information needed to questions prompted
5. After question prompts, README file will be generated and found in the utils folder

## Example of Applicaiton
https://watch.screencastify.com/v/0EtK2SIzrTNH7lfvzksR


