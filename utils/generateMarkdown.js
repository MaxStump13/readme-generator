// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![${data.license} license](https://img.shields.io/badge/license-${data.license}-blue)

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributions

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## License

  This project uses the ${data.license} license

  ## Questions

  If you have any questions or would like to contribute, Here is the link to my [GitHub profile](https://github.com/${data.github}). Or if you would like to reach me directly, here is my [email](mailto:${data.email}).

`
}

module.exports = generateMarkdown;
