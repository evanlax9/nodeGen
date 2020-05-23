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
![Avatar image](${data.avatar_url})

`;
}

module.exports = generateMarkdown;
