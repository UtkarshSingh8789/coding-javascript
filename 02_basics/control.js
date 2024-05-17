// if 
if(/**condition*/true){
    //condition mst be trur to execute code inside;
}

const isUserLoggeIn=true
const temp=41
// if(temp<50){
//     console.log("temp less than 50")
// }
// else{
//     console.log("temp is greater than 50")
// }
//=== strictilly equal ishme datatype bhi same hona chaiye;
const score=200
if(score>100){
    const power="fly"//yha var likhenge to if ke scope ke bhr bhi define hoga
    // console.log(`user power ${power}`)
}
// console.log(`user power: ${power}`)//ye error dega kyuki power bs if ke and hi define hai


// short hand notation of if;
// const balance=1000
// // if(balance>500) console.log("test")
// //nesting of ifelse 
// if(balance<500){
//     console.log("less than 500")
// }
// else if(balance<900){
//     console.log("less tha 900")
// }
// else if(balance<1200){
//     console.log("hello")
// }
// else{
//     console.log("byy")
// }

//&& do statement ke beech lgayenge to if ke andr tbhi jayega jbdono statement shi ho;
//|| ek bhi true hua to if statement execute hojayega;
// const month=3
// switch(month){
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;//agr break nhi lgaye to jahe se match hoga wha ke neeche sara output dega except default
//     default:
//         console.log("dafault case match")
//         break;
// }
const month="jan"
switch(month){
    case "jan":
        console.log("january")
        break;
    case "feb":
        console.log("feb")
        break;
    case "mar":
        console.log("march")
        break;
    case "apr":
        console.log("april")
        break;//agr break nhi lgaye to jahe se match hoga wha ke neeche sara output dega except default
    default:
        console.log("dafault case match")
        break;
}

//false,0,empty String,NaN,NULL,undefined,-0,BigInt 0n
//ye sb value ko humlog automatic false maante hai;
// tru value="0","false"," ",empty array[],emptyobject{},emptyfunction function(){}//ye sb automatically true hoga;
// ye tin line interiew perspective se bhut inportant hai;

const username=[];
if(username.length===0){
   console.log("array is empty")//is trh humlog check krenge ki array empty hai ya nhi;
}

const emptyObj={}
if(Object.keys(emptyObj)/*ye ek array dedega keys ka phle pdhe hai */.length===0){
   console.log("object is empty")
}

//Nullist Coalescing operator

let val1
// val1=5 ?? 10//is case me 5 aayega;
// val1=null??10//isme 10 aayega
val1=undefined??15//isme 15 aayega;
console.log(val1)

// terinary operator
// condition ? true:false
const price=100
price>=80 ? console.log("greater than 80"):console.log("less than 80")

//terniary operator and nullist coalescing operator are both different thing;
//******************************************************************************* */