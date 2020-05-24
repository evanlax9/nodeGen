const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const fs = require("fs");
const axios = require("axios");



const questions = [
    {
        type: "input",
        name: "githubusername",
        message: "github username:",
    },

    // {
    //     type: "input",
    //     name: "email",
    //     message: "user email:",
    // // },
    // {
    //     type: "input",
    //     name: "url",
    //     message: "project url:",
    // },
    {
        type: "input",
        name: "title",
        message: "title of project::",
    },
    {
        type: "input",
        name: "table",
        message: "table of contents:",
    },
    {
        type: "input",
        name: "installation",
        message: "installation Notes:",
    },
    {
        type: "input",
        name: "usage",
        message: "usage notes:",
    },
    {
        type: "input",
        name: "contributing",
        message: "contributing:",
    },
    {
        type: "input",
        name: "tests",
        message: "tests:",
    },
    {
        type: "input",
        name: "questions",
        message: "questions:",
    },
    {
        type: "input",
        name: "email",
        message: "user email:",
    },
    {
        type: "input",
        name: "license",
        message: "Licenses:",


    },
    // },
    // {4
    //     type: "input",
    //     name: "description",
    //     message: "short description:",
    // }

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(responses);
        axios.get(`https://api.github.com/repos/${responses.githubusername}/${responses.title}`).then(res => {
            const md = generateMarkdown({ ...res.data, ...responses });
            console.log(res.data)
            writeToFile("readme.md", md);
        }).catch(err => {

            if (err.response.status === 404) console.log("Repo does not exist, check entry")
        })
    })

}

init();

// APi key
// 6188e1212cec4719e7cef77fdca9d689c04e922f