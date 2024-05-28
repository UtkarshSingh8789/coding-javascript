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
//.then resolve ke sath link hota hai jo bhi kaam promise me hua we retura hota hai .then me .thn automatic ek argument leta hai;
// another way;
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved')//response.then me ata haierror .catch me;
})//isbar do varibale me store krne ke jgh ek hi me sbko likh diye;

const Promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"utkarshSingh8789",
            email:"utkarshKumarSingh@gmail.co"
        })//ishka kaam yha se .then me value pass krwan hai taaki kaam ho ske
        //jada tr resolve ke andr objet type data pass hota
        //ab yha se data then ko pass hoga toh then data lega kaise?
    },1000)//suppose kijiye ye function bhut sara kaam khi se network se jaakedata laya file system se jaake khi se data laaya;

})
Promise3.then(function(/*yha dat aayega resolve se jo object hai*/user){
    console.log(user)
})//yha pe sara kaam krayunga yha pe saara value retuen hota;


const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        //let suppose kro ki hum kuch webrequest aur network request kr  rhhe hai file acced hogyi to kuch bolunga agr file access nhi hui toh bhi kuch bolna hoga
        // let error=true;
        let error=false
        if(!error){
            resolve({
                username:"hitesh",
                password:"1234Aa@"
            })
        }else{
            reject('ERROR:Something went wrong')//reject tmko error deta hai
        }
    },1000)
})//.then krke reolve .catch krke error lelenge
promise4.then((user)=>{
    console.log(user)
    return user.username//ab swal ye hai ki ye return kha ho rha hai;
})
.then((username)=>{//readability ke liye nextLine me krenge;
    //jo upar wale value se return hoke aayegi we yha jayegai
    //***jb data base connection krenge toh ye bhut kaam aayega; */
    console.log(username)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>console.log("promise is either resolved or rejected"))//ye btado ki x amount time ke baad jo bhi aapka hona tha we hogya kya,yr humesa execute hoga kind of default
// const username=promise4.then((user)=>{
//     console.log(user)
//     return user.username//swal ye hai ki ye return kha ho rha,
// })console.log(username) to error aayega ishka mtlb,to aise situation me jb humlog ko wha se data nikalna hai toh ye kaam nhi krenge,ushke liye chaining of then hoga;


//*************************************** Another way instead of .then using async await*/


const promise5= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({
                username:"utkarsh",
                password:"1234Aa@"
            })
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
// another way async await ka use krke then ke jgh
// ye thora der wait krta hai kaam hona ka hogya toh thk warna error dedte;//ishka issue hai ki humlog gracefully catch handle nhi kr paate;
// async function consumePromise5(){
//     const response=await promise5
//     console.log(response)
// }//isme problem aayega kyuki async await error ko handle nhi kr skta agr error false hua to kaam kr jaayega;
async function consumePromise5(){
    try{
    const response=await promise5
    console.log(response)
    } catch(error){
        console.log(error)
    }
}
//try and catch ka use krke error gracefully handle kr lete hai;
consumePromise5()
// async function getAllUsers(){
//     try{
//         const response=await fetch('https://api.github.com/users/UtkarshSingh8789')
//         const data=await response.json()
//         console.log(data)//dekho is code me koi glti nhi hai phir bhi nhi kr rha kyuki humlog ko lgta hai bs network request data reques krne me hi time lgta jbki isme bh lg rha isliye isme bhi await lgayenge
//     } catch(error){
//         console.log("E: ",error)
//     }
// }
// getAllUsers() now doing this with .then.catch
fetch('https://api.github.com/users/UtkarshSingh8789').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))//fetch kaam phle hoga set time out ka kaam bhi ishke baad hoga;
// isi karn jb run ho rha to ye phle output me hai , 
//fetch ko jada priority dete hai we phle aake lgti hai call stack mein;