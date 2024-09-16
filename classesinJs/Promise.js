//creating my own promise;
function random(resolve){//resolve is also a funtion;
    // promise resolve kb hota hai means promise khtm kb hota hai ye humlog ko is argument me btana hoga;
    //resolve()//imidiatey promise resolve hojayega and .then me jo bhi pass kiye hai we output hojayega
    // what happend when we do this?
    setTimeout(resolve,3000);// jo bhi resolve function hai we tin second baaad call hoga;
    // 3 second ke badd .then me jo hai we kaam krega;
}

let p=new Promise(random);//supposed to return uh something eventually;
// whenever the promise is eventually complete we have to do use .then;
// ab kaise pta chlega when is the promise eventually completed?
// toh jo bhi Promise class bna rha hai ushko btana hoga you will be eventually complete when this happens;
// promise need to be eventually return something when its get completed;
// aur we humlog Promise jo argument le rha hai ushme define krenge;


//USING THE EVENTUALL VALUE RETURNED BY THE PROMISE;
function call(){
    console.log("promise succedded")
}
// p.then(call)

//Assigment;


// here i am creating the promisified version of readFile;
// ihave created this in index.js;(file;)

// learning concept once again;
// console.log("top of the file");
// function readFile(resolve){
//     console.log("readFile is called");
//     setTimeout(function(){
//         console.log("call back based time out get completed")
//         resolve()
//     },3000)
// }
// function setTimeoutPromisified(){
//     console.log("setTimeOut promisified is called")
//     return new Promise(readFile)
// }

// const pa=setTimeoutPromisified();
// function callback(){
//     console.log("time is done")
// }
// pa.then(callback);
// console.log("the end")


// STRUCTURE OF PROMISE CLASS;

// class Promise2{
//     constructor(fn){
//         function afterDone(){
//             this.resolve();
//         }
//         fn(afterDone)
//     }
//     then(callback){
//         this.resolve=callback
//     }
// } // using my own promise class;
// console.log("top of the file");
// function readFile(resolve){
//     console.log("readFile is called");
//     setTimeout(function(){
//         console.log("call back based time out get completed")
//         resolve()
//     },3000)
// }
// function setTimeoutPromisified(){
//     console.log("setTimeOut promisified is called")
//     return new Promise2(readFile)
// }

// const pa=setTimeoutPromisified();
// function callback(){
//     console.log("time is done")
// }
// pa.then(callback);
// console.log("the end")

// callback hell// why we use promise?

//PROBLEM:-
// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2

//using callBack;
// setTimeout(function () {
//     console.log("hi");
//     setTimeout(function () {
//       console.log("hello");
  
//       setTimeout(function () {
//         console.log("hello there");
//       }, 5000);
//     }, 3000);
//   }, 1000);//when we have to do one asynchronous call after anothe asynchronous call results into callBack hell;
  //it is getting nested;

  //PROMISIFIED VERSION:

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration)
    })
}
//PROMISIFIED CHAINING;
// setTimeoutPromisified(1000).then(function(){
//     console.log("hii");
//     return setTimeoutPromisified(3000)
// }).then(function(){
//     console.log("hello")
//     return setTimeoutPromisified(5000)
// }).then(function(){
//     console.log("hii there")
// })
//we can do this more easily using async await function ;
// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
  
// async function solve() {
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hi there");
// } 
// solve();// we have to call this;

// under the hood promise hi call ho rha hai yaad rkhna behave kr rha bs synchronous jaisa but hai asynchronous hi;
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hi");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
} 
solve();
console.log("missing uh love")//first this line will only print because t is asynchronous code;
 