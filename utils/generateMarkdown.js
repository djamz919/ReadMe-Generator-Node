// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "![License: MIT](https://img.shields.io/badge/license-APM-yellow)\n";
  } else if (license == 'APACHE 2.0') {
    return "![License: APACHE 2.0](https://img.shields.io/badge/license-APACHE_2.0-green)\n";
  } else if (license == 'GPL 3.0') {
    return "![License: GPL 3.0](https://img.shields.io/badge/license-GPL_3.0-red)\n";
  } else if (license == 'BSD 3') {
    return "![License: BSD 3](https://img.shields.io/badge/license-BSD_3-blue)\n";
  } else {
    return "";
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license == 'APACHE 2.0') {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license == 'GPL 3.0') {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == 'BSD 3') {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}


// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
  ## License
  ${renderLicenseBadge(license)}
  To learn more about this license visit this [link]${renderLicenseLink(license)}.
  `
  } else {
    return "";
  }
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation
  To install any dependencies, run the command: ${data.install}.

  ## Usage
  ${data.usingRepo}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribute}

  ## Tests
  To run any tests, run the command: ${data.tests};

  ## Questions
  For any questions, reach out to github.com/${data.github} via the following email address: ${data.email}.
  `
}

module.exports = generateMarkdown;
