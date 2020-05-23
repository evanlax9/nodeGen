const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const fs = require("fs");
const axios = require("axios");



const questions = [
    {
        type: "input",
        name: "githuberusername",
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
    // },
    // {
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
        axios.get(`https://api.github.com/repos/evanlax9/Workday-Planner`).then(res => {
            // axios.get(`https://api.github.com/users/${responses.githuberusername}/repos?per_page=100`).then(res => {
            // const repo = res.data.find(r => r.name.toLowerCase() === "workday-planner")
            // // const repo = res.data.find(r => r.name.toLowerCase() === responses.title.toLowerCase())
            // console.log(repo);
            const md = generateMarkdown({ ...res.data, ...responses });
            console.log(res.data)
            // const md = generateMarkdown(repo);
            writeToFile("readme.md", md);
        })

    })

}

init();
