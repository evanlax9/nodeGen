const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
const fs = require("fs");




const questions = [
    {
        type: "input",
        name: "name",
        message: "github username:",
    },
    {
        type: "input",
        name: "email",
        message: "user email:",
    },
    {
        type: "input",
        name: "url",
        message: "project url:",
    },
    {
        type: "input",
        name: "title",
        message: "title of project::",
    },
    {
        type: "input",
        name: "description",
        message: "short description:",
    }

];

function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log({ ...responses });

    })

}

init();
