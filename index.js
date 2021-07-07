const Manager=require("./lib/Manager.js")
const Engineer=require("./lib/Engineer.js")
const Intern=require("./lib/Intern.js")

const inquirer=require("inquirer")
const fs=require("fs")
const path= require("path")
const { ConsoleWriter } = require("istanbul-lib-report")

const outputDir=path.resolve(__dirname, "output")
const outputFile=path.join(outputDir,"output.html")

var team=[]

function mainMenue(){
    inquirer.prompt([{
        type: "list",
        name:  "Userchoice",
        message: "Who Would You Like to Add?",
        choices: ["manager", "engineer","Intern","End Program"]
    }]).then(imput => {
        switch(imput.Userchoice){
            case "manager":
                createManager()
                break
            case "engineer": 
                createEngineer()
                break
            case "Intern":
                createIntern()
                break
            default:
                createPage()
        }
    })
}

function createManager(){
    inquirer.prompt([{
        type: "input",
        name: "managername",
        message: "Managers Name" 
    },
    {
        type: "input",
        name: "manageremail",
        message: "Managers Email"
    },
    {
        type: "input",
        name: "managerid",
        message: "Managers ID"
    },
    {
        type: "input",
        name: "managerOfficenumber",
        message: "Managers Office Number" 
    }

]).then(data =>{

    var newManager= new Manager(data.managername,data.managerid,data.manageremail,data.managerOfficenumber)
    team.push(newManager)
    mainMenue()
})

}

function createEngineer(){
    inquirer.prompt([{
        type: "input",
        name: "Engineername",
        message: "Engineer's Name" 
    },
    {
        type: "input",
        name: "Engineeremail",
        message: "Engineer's Email"
    },
    {
        type: "input",
        name: "Engineerid",
        message: "Engineer's ID"
    },
    {
        type: "input",
        name: "Github",
        message: "Github" 
    }


]).then(data =>{

    var newEngineer= new Engineer(data.Engineername,data.Engineerid,data.Engineeremail,data.Github)
    team.push(newEngineer)
    mainMenue()
})

}


function createIntern(){
    inquirer.prompt([{
        type: "input",
        name: "Internname",
        message: "Intern's Name" 
    },
    {
        type: "input",
        name: "Internemail",
        message: "Intern's email"
    },
    {
        type: "input",
        name: "Internid",
        message: "Intern's ID"
    },
    {
        type: "input",
        name: "school",
        message: "school" 
    }

]).then(data =>{

    var newIntern= new Intern(data.Internname,data.Internid,data.Internemail,data.school)
    team.push(newIntern)
    mainMenue()
})

}

function createPage(){
    team.forEach(T=>{
        console.log(T)
    })
    process.exit()

}

mainMenue()