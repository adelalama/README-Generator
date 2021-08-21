const fs = require('fs');
const inquirer = require('inquirer');

//inquirer used to ask for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
    },
    {
      type: "input",
      message: "What is a short description of your project?",
      name: "description"
    },
    {
      type: "input",
      message: "What is your e-mail address?",
      name: "mail"
    },
    {

      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
      ]

    },
    {
      type: 'input',
      message: 'Please enter your GitHub user:',
      name: 'github'
    },
    {
      type: 'input',
      message: 'Command to run tests:',
      default: 'npm test',
      name: 'test'
    },
    {
      type: 'input',
      message: 'Command to install dependencies',
      default: 'npm install',
      name: 'dependencies'
    },
    {
      type: 'input',
      message: 'Enter the instrucctions to use the repo:',
      name: 'usage'
    }

  ])
  .then((res) => {
    createReadMe(res);
  })
  .catch((err) => {
    console.log(err)
  })

//function that takes the answers from inquirer to create the readme
function createReadMe(input) {
  let readMeTitle;
  let readMeDesc;
  let readMeMail;
  let readMeUsage;
  let readMeLicense = input.license;
  let readMeDependencies;
  let readMeTest;
  let readMeGitHub;
  let readMecontact;
  let readMeTableOfCont;

  let filledReadMe = [];

  const descriptionHead = "## Description:";
  const contactHead = '## Contact:';
  const usageHead = '## Usage:';
  const dependenciesHead = '## Installation:';
  const TestHead = '## Testing:';
  const gitHubHead = '## GitHub:';
  const licenseHead = '## License:'
  const tableOfContHead = '## Table of Contents:'

  //title
  if (input.title == '') {
    readmeTitle = '# TITLE';
  } else {
    readmeTitle = `# ${input.title}`;
  }
  filledReadMe.push(readmeTitle);

   //license badge
   let badge = `![](https://img.shields.io/badge/license-${readMeLicense.replace(/ /g, "%20")}-blue?style=flat-square)`;
   filledReadMe.push(badge)
 

  //tabkle of contents
  readMeTableOfCont = `${tableOfContHead}\n* [Description](#description)\n* [Usage](#usage)\n* [License](#license)\n* [Installation](#installation)\n* [Testing](#testing)\n* [Contact](#contact)\n`;
  filledReadMe.push(readMeTableOfCont); 

  //desc
  if (input.description == '') {
    readmeDesc = `${descriptionHead}\n Enter project description here.`;
  } else {
    readmeDesc = `${descriptionHead}\n${input.description}`;
  }
  filledReadMe.push(readmeDesc);


  //mail
  /*if (input.mail == '') {
    readMeMail = `${emailHead}\n Enter e-mail here.`;
  } else {
    readMeMail = `${emailHead}\n${input.mail}`;
  }
  filledReadMe.push(readMeMail);
  */
  //usage
  if (input.usage == '') {
    readMeUsage = `${usageHead}\n Input project usage.`;
  } else {
    readMeUsage = `${usageHead}\n${input.usage}`;
  }
  filledReadMe.push(readMeUsage);

  //license
  readMeLicense = `\n${licenseHead}\nThis project is convered under the ${input.license} License.`;
  filledReadMe.push(readMeLicense)

  //dependencies

  if (input.dependencies == '') {
    readMeDependencies = `${dependenciesHead}\n Enter dependencies:`;
  } else {
    readMeDependencies = `${dependenciesHead}\n${input.dependencies}`;
  }
  filledReadMe.push(readMeDependencies);

  //tests

  if (input.test == '') {
    readMeTest = `${TestHead}\n Enter Test commands here:`;
  } else {
    readMeTest = `${TestHead}\n${input.test}`;
  }
  filledReadMe.push(readMeTest);

  //contact
  readmeContact = `\n${contactHead}\nIf you have any questions or want to contact me, you can reach me at my GitHub: [${input.github}](https://github.com/${input.github}), or ${input.mail} by mail.`;
  filledReadMe.push(readmeContact);

  const finalReadMe = filledReadMe.join('\n')

  //write readme file with information formatted from filledReadMe

  fs.writeFile("./README.md", finalReadMe, (err) => {
    if (err) {
      throw err;
    } else {
      //log successful readme
      console.log("README file successfully created!");
    }
  });

}