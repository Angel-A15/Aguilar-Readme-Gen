//Markdown function for the Readme
function generateMarkdown(userResonses, userInfo) {
  return `# ${data.title}
  ##License:
  [![license](https://img.shields)]

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.Installation}

  ## Usage:
  ${data.usage}

  ## Contribution
  ${data.contribution}

  ## Testing:
  ${data.test}

  ## Questions:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:user@example.com)

  `;

}



module.exports = generateMarkdown;
