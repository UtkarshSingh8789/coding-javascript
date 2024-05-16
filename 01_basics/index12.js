// scope;;
// let a=10
// const b=20
// var c=20
// console.log(a)
// console.log(b)
// console.log(c)
//{} scope bolte hai;
// if(true){
//     let a=10
//     const b=20
//     var c=20
// }
//console.log(a)//error dedega kyuki a define bs if ke and hai if ke bahr a define nhi hoga;
//but;
// console.log(c)//isme erroe nhi aayega 20 dedega kyuki humlog var me likhe hai;
//isliye var ko humlog use nhi krtte
let a=300//global scope;
if(true){
    let a=10
    const b=20
    var c=20
    // console.log("iner: ",a)
}
// console.log(a)

//******************************************************** */
// SSCOPE LEVEL AND MINI HOISTING

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)//ye erro dedega kyuki website varible define hai bs function 2 ke andr ;

    two()//agr two() ko comment krdiye to kuch output nhi aayega kyuki two to kbhi call hi nhi ho rha hence fs jayennge is ase me humlog;

}
one()

if(true){
    const username="hitesh"
    if(username=="hitesh"){
        const website=" youtube"
        console.log(username+website)
    }
    // console.log(website)//erro aayega
}
// console.log(username)//error aayega kyuki username bs if ke andr define hoga


////************INTRESTING */

// function addone(num){
//     return num+1
// }
// console.log(addone(5))

// const addtwo=function(num){
//     return num+2
// }
// console.log(addtwo(5))

//dono shi trika hai but ye dono me ek antr hai we is examople se smjhenge;
console.log(addone(5))//isme error nhi btayega aur output aajayega 6
function addone(num){
    return num+1
}

// console.log(addtwo(5))//isme error btayega major differnce beteen both 
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5))