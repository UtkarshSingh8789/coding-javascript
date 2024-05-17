//***********THIS AND ARROW FUNCTION IN JAVASCRIPT; */
//ARROW FUNCTION;
 const user={
    username:"hitesh",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to my website`)
        console.log(this)//ye pura object ko output dega;
    }
 }// dekho username change to ho kta hai aur humlog chhate hai ki jaise hi user name change ho humara welcomeMessage bhi change ho jaye;

// user.welcomeMessage()
// ab koi username change krde to;
// user.username="sam"
// user.welcomeMessage()// change ho jayega;
// console.log(this)//dekho ye ek emppty obje dega kyuki ishko humlog node ke enviroment me likhe hai isliye ye ek empty object dega;
//lkin  agr humlog ishko browser me likhenge toh ye empty object nhi dega ye ek global object window dega;
//**************Note-browser ka global object window hai imp */

// function chai(){
//     let username="hitesh"
//     console.log(this.username);//yha pe undefined aayega kyuki humlog this ko arrow function ke andr use nhi kr skte hai;
// }
 
// const chai=function(){
//     let username="hitesh"
//     console.log(this.username)
// }//ishko arrow function me aise likhenge nichhhe likhe hai;
const chai= () => {
    let username="hitesh"
    console.log(this.username)
}//arrow function

const addTwo=(num1,num2) => {
    return num1+num2
}
// console.log(addTwo(3,4)) //basic arrow function;

const add =(num1,num2) => (num1+num2)//agr curly bracket lenge denge toh return likhna hoga ye react me use aayega
// agr humlog ko function se object return krna ho to ishka faida dekhega;
const addNumber=(num1,num2) =>({username:"hitesh",
    age:50
});//yha gor kro
// console.log(addNumber(1,2))//is case curly bracket lga ke humlog return nhi kr ppayenge yha pe parantheses hi use krna hoga major cincept;
// ***************************************************************************
//IMEDIATELY INVOKED FUNCTION EXPRESSIONS

// function ko imediately evoked krne ke liye humlog iife ka use krta hai;
(function nameOfUser(){
    console.log(`utkarsh rajput`)
}) ();//dekho ishko use krne ke liye isse just phle jo function bhi likha hoga ushko bnd krenge;
// bhut baar global scole ke pollution se dikkat hai usi control krne ke liye function ko imediately invoked krwane ke liye humlohg iife ka use krte hai;
( () => {
    console.log("hello!")
} )();//ishko use krne ke liye isse just phle wala function ko close kiye hai


( (name) => {
    console.log(`hello! ${name}`)
} )("hitesh");//yad rkhna ye tbhi  exexute hoga jb phle wala iife bnd ho bhut inportant hai;

//*****************************Inportant point for interView *////////************ */

//how do javascript execute code// call stack::

