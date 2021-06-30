const Manager=require("./lib/Manager.js")
const Engineer=require("./lib/Engineer.js")
const Intern=require("./lib/Intern.js")

const inquirer=require("inquirer")
const fs=require("fs")
const path= require("path")

const outputDir=path.resolve(__dirname, "output")
const outputFile=path.join(outputDir,"output.html")

var team=[]