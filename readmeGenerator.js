// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1>${answers.title} </h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
${answers.information}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
* ${answers.installation}
## Usage
* ${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Contact:
<br />
Find me on GitHub: [${answers.ghusername}](https://github.com/${answers.ghusername})<br />
<br />
Email me for any questions:: ${answers.email}<br /><br />
    `;
  }
  
  module.exports = generateReadme;