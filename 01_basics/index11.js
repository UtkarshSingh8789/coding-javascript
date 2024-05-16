// FUNCTIONS;
function sayMyName(){
    console.log("utkarsh")
}
// sayMyName()

// function addTwoNumbers(number1,number2){//yha number1 and number2 parameters hai
//     console.log(number1+number2)
// }
// addTwoNumbers(3,4)// jb function call hua to 3,4 ko arguments bolenge;
// is method se ye dikaat ho rha ki humlog variable result me store nhi kr paa rhe;
//**** */ agr humlog ko kisi variable me function ko store kena hai toh function ko return krna hoga;;

function addTwoNumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
}
const result=addTwoNumbers(3,5)
// console.log(result)

function loginUserMess(username){
    // if(username===undefined){
    //     console.log("plz enter user name")
    //     return
    // }
    if(!username){
        console.log("plz enter user name")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMess("hitesh"))
// agr username pass hi nhi krega to undefined aayega null  nhi interview me puch skta hai

// console.log(loginUserMess())
//is case me humlog input nhi diye to if statement exexute hogya but agr humlog chae to default value
// set kr skte hai isse kya hoga ki agr input nhi denge to default value aajayega if kbhi execute nhi hoga
function loginUserMess(username="sam"){//default value

    return `${username} just logged in`
}
console.log(loginUserMess())//agr value pass hoga to overwrite hojayega;

//********************************************************************* */
//function continuation;


//dekho agr humlog koi project bnayenge jisme shopping cart hoga ushme user jitna mn kre utna product daalega to ushko kaise handle krenge;
// function calculateCartPrice(num1){
//     return num1

// }
// console.log(calculateCartPrice(2))
// function calculateCartPrice(num1){
//     return num1

// }
// console.log(calculateCartPrice(2,3,4,5))
//aise bs first value millega output 2 aayega
// function calculateCartPrice(...num1){
//     //...num1 rest operator simialr to spread operator
//     return num1

// }
// console.log(calculateCartPrice(2,3,4,5))// ye ek array bna ke dega jisme sara data hoga jo hum denge input me
//agr sum nikalna ho to array ka sum nikalna assan hai;
function calculateCartPrice(val1,val2,...num1){
    //...num1 rest operator simialr to spread operator
    return num1

}
console.log(calculateCartPrice(2,3,4,5))//val1=2,val2=3 and baaki rest operator mein

// how to pass object in function;
const user={
    username: "hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)
// jruri  nhi ki humlog user object bna ke pass kre direct bhi pass kr skte hai

handleObject({
    username:"sam",
    price:969
})

//how to pass array in function;
const myArr=[10,20,30,40]
function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myArr))

// similary object jaisa bina newarray array bnaye hue function me pass kr skte hai;