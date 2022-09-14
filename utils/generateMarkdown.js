//Markdown function for the Readme
function generateMarkdown(data) {

  return `# ${data.title}

  ## License:
  ${data.license
  }
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing:
  ${data.test}

  ## Questions:
  - Github Username: [${data.github}](https://github.com/${data.github})
  - Github Profile Link: [${data.GhProfile}](https://github.com/${data.GhProfile})
  - Email: [${data.email}](mailto:user@example.com)

  `;

}



module.exports = generateMarkdown;
