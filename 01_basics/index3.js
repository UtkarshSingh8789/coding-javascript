"use strict"; // treat all js code as newer version
// let name="hitesh"
// let age=18
// let isLoggedIn =false

// types of datatype;
// number-range= 2 to power 53
// bigint;
//string 
// boolean
// null(null ek class hai yaad rkhna interview me puchh skta hai);
// undefined

// console.log(typeof "hitesh")
// console.log(typeof age)
// console.log(typeof null)
// console.log(typeof undefined)

// let score=33
// console.log(typeof(score)) // ishka jo type hoga we number hoga (n->small)

// let points="33"
// console.log(typeof points)// ishka jo type hai we string hai let suppose we have to conert it into number
// converting string 33 to number

// let valueInNumber=Number(points)// yaad rkhna capitalletter wala N use krenge yha number mein;
// console.log(typeof valueInNumber)

// let points2="33abs"
// let valueInNumber2=Number(points2)

// console.log(typeof valueInNumber2)
// console.log(valueInNumber2)

// imp--dekho dekhne me lgega ki valueInNumber2 ka type number jo mi hai but ishme jo value store hoga we number ke jgh NaN hoga
// ye problem hai  js ka isliye check kr liya kro;
// true value-1;
// null->0
// undefined->NaN


// let isLoggedIn="hitesh" true dega
let isLoggedIn=""// false dega
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1-boolean me true
// 0-boolean me false


let someNumber=33;
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)