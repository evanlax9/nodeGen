function generateMarkdown(data) {
  return `
  # Title
# ${data.name}
## Description
${data.description}
### Table of Contents
${data.table}
#### License
${data.license}
#### Installation
${data.installation}
#### Usage
${data.usage}
#### Contributing
${data.contributing}
#### Tests
${data.tests}
#### Questions
${data.questions}
#### Email
${data.email}
#### Avatar
![Avatar image](${data.owner.avatar_url})
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]
`;
}

module.exports = generateMarkdown;
