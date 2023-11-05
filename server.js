const express= require('express');
const mongoose =require('mongoose');
let app = express();

async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/students');
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
    }
 }
 connect()
    
 //Schema
const studentsSchema= new mongoose.Schema({
   name:String,
   age : Number,
    address:String,
    phone:String,
});

let studentsModel = new mongoose.model("students",studentsSchema);
const coursesSchema= new mongoose.Schema({
    name: String,
    page : Number,
    discription :String
 });

 let coursesModel = new mongoose.model("courses",coursesSchema);


let newstudent = new studentsModel({
    name:"nourhan ahmed",
    age: 21,
    phone:"01156789",
    address:"cairo"
 
}).save();
let ahmedstudent = new studentsModel({
    name:" ahmed ali",
    age: 21,
    phone:"019088765",
    address:"cairo"
 
}).save();
let mennastudent = new studentsModel({
    name:"menna ahmed",
    age: 21,
    phone:"0129876885",
    address:"cairo"
 
}).save();
let mohmwdstudent = new studentsModel({
    name:"mohmed abdullah",
    age: 21,
    phone:"01000765",
    address:"cairo"
 
}).save();
let nehalstudent = new studentsModel({
    name:"nehal mohmed",
    age: 20,
    phone:"013700099",
    address:"cairo"
 
}).save();

let programingcourse = new coursesModel({
    name:"programing",
    page: 300,
    discription:"9ch"
}).save();
let englishcourse = new coursesModel({
    name:"english",
    page: 200,
    discription:"5ch"
}).save();
let networkcourse = new coursesModel({
    name:"network",
    page: 220,
    discription:"5ch"
}).save();
let informationsystemcourse = new coursesModel({
    name:"information system",
    page: 250,
    discription:"6ch"
}).save();

let mathcourse = new coursesModel({
    name:"the math",
    page: 200,
    discription:"5ch"
}).save();
let databasecourse = new coursesModel({
    name:"database",
    page: 200,
    discription:"4ch"
}).save();

app.listen(8080, function(){
    console.log('server now is opend')
}) 