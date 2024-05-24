// const promiseOne=new Promise(function(resolve,reject){
//     // do and async task;
//     //DB calls,cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete')
//         resolve()
//     },1000)
// })
// promiseOne.then(function(){
//     console.log("promise consumed");
// })//consumption of promise it has direct relation to resolve
//we have to conect resolve and then;

// another way;
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved')
})//isbar do varibale me store krne ke jgh ek hi me sbko likh diye;