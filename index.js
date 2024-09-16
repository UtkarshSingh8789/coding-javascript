// const fs = require("fs");
// const contents = fs.readFileSync("a.txt", "utf-8");//it reads the file synchronnously;
// //synchronously means execution of code line by line ;
// //first first line will run then only secnd line and so on;
// console.log(contents);
// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// const contents2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents2);

// functional arguments;-passing a function to another function as an argument;
//APPROCH-1;
function sum(a, b) {
    return a + b;
}
  
function multiply(a, b) {
    return a * b;
}
  
function subtract(a, b) {
    return a - b;
}
  
function divide(a, b) {
    return a / b;
}
  
function doOperation(a, b, op) {
    return op(a, b)
}
  
// console.log(sum(1, 2))
//APPROCH-2;
function sum(a, b) {
    return a + b;
}
  
function multiply(a, b) {
    return a * b;
}
  
function subtract(a, b) {
    return a - b;
}
  
function divide(a, b) {
    return a / b;
}
  
function doOperation(a, b, op) {
    return op(a, b)
}
// console.log(doOperation(1, 2, sum))//function ko as a argumenet pass krrhe hai;

// asynchronous code;
const fs=require("fs");
function print(err,data){
    // console.log(data)
}
//fs.readFile("a.txt","utf-8",print);//asynchronously ye argument me ekcall back le rha hai;
// jb reading hojayega to print function call hoga;
//fs.readFile("b.txt","utf-8",print);//asynchronously;
//console.log("utkarsh rajput")

// a very famous interview question- dekho kya hoga phle line 64 execute hoga readkrega file ko a.txt aur read krne ke bad print ko call krega;
//is kaam ko krne ke liye we complete hone ka wait nhi krega sidha 65 execute hoga and same process will go on and phir 66 ececute hoga ;
//kisi line ke completion ke liye wait nhi hoga

//OUTPUT-utkarsh rajput
//hii there
//i love uh nishi;

// console.log("hii")
// function timeout(){
//     console.log("click on the button")
// }
//setTimeout(timeout,5000)//ye bhi asynchronously hi kaam ho rha hai call back le rha as an argument 
//ishka kaam hai ki 5000 milisecond ke baad timeout function ko calll krna;
// wait nhi hoga udne der me dusre line ka execution start ho jayega;


//console.log("welcome")  // desiredoutput- 
//1-hii;
//jbtk second execute hoga tb tk third line ke execution satrt hojayega hence 
//2-welcome
//after 5 second-click on the button;


// INPORTANT POINTS;

console.log("hii");
function timeout(){
    // console.log("click on the button")
}
setTimeout(timeout,1000)//asynchronously run krta hai ye;
// console.log("welcome to loop");
let c=0;
for(let i=0;i<100000;i++){
    c++;//it willl take 2-3 second;
}
// console.log("hello sir how are you");


// dekho is case me kya hoga;
// phle hii print hoga ushke baad setTimeout call hoga(asynchronous) , jb tk ye execute hoga tb tk next line me chle jayenge;
// next line me forr loop hai jo complete hone me 2-3 second lgyaega yaad rkhna for loop jb tk complete nhi hoga tb tk humlog dusre line me nhi jayenge
// kyuki loop cpu bounded task hai jb loop complete hoga to setTimeout(callback queue) me jayega
//secondly prrint hoga hello sir how are you
// and last me click on the button;
//desired output- 1-hii
//2-welcome to loop
//3-hello sir how are you;
//and last me click on the button;

// promisified version of readFILe;

function readTheFile(resolve,reject){
    fs.readFile("a.txt","utf-8",function(err,data){
        if(err){
            reject("file not found")
        }
        else{
            resolve(data)
        }
    })
}
function read(){
    return new Promise(readTheFile);
}
let p=read();
function callback(contents){
    console.log(contents)
}
p.then(callback).catch(function(e){
    console.log(e)
})





