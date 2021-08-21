const fs = require('fs');
const inquirer = require('inquirer');


inquirer 
    .prompt([
      
    ])
/*const answers = [
  {
    type: 'input',
    name: 'email',
    message: 'Please write your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "Please write your project's name?",
  },
  {
    type: 'input',
    name: 'information',
    message: 'Please write a short description of your project',
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
    name: 'ghusername',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Command to run tests(if there are any):',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Command to install dependencies:',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use repo:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can the user contribute to the repo?',
  },
];

// function to add user input to generated readme file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}



// initialize function to ask for user input
function init() {
  inquirer.prompt(answers).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateReadme({ ...inquirerResponses }));
  });
}

init();
*/