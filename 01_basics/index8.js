// Date;

let myDate=new Date()
// console.log(myDate)// read krna muskil ho rha isliye humlog ishko string me hange krke dekhte hai;
// console.log(myDate.toString())//isse readable date aajayega;
// // aur bhi trike hai;
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)// date javascript me ek object hai;


// let myCreatedDate= new Date(2024,0,23)
// let myCreatedDate= new Date(2024,0,23,5,3)// extra jo 5 aur 3 hai we time ke liye;
// console.log(myCreatedDate.toLocaleString())// javascript me month 0 se chalu hota hhai isliye zero pe january aya;
// another way to create date;
let myCreatedDate=new Date("01-14-23")
console.log(myCreatedDate.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp)//millisecond me aayega;
console.log(myCreatedDate.getTime())
//we can conver it into second;
console.log(Math.floor(Date.now()/1000))

// ye inportant hai bhut jgh kaam aayega;
let newDate=new Date()
newDate.toLocaleString('default',{
    weekday:"long"
})
