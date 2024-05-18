const myNums=[1,2,3,4,5,6,7,8,9,10]
// let newNums=myNums.filter(/*filter function bhi apne andr for each hi leta hai*/ (num) =>num>4)
// console.log(newNums)
// humlog filter ko aise use krte hai yaad rkhna;condition dete hai aur jo bhi condition ko satisfy krega we return hoga

//let neNums=myNums.filter((num)=>{
    // agr curly bracket ka use kiye toh return likhna prega;
    //return num>4
//})
// now instead of filter using for each loop;
const newNums=[]
myNums.forEach((nums)=>{
    if(nums>4){
        newNums.push(nums)
    }
})//for each ko directly varriable me assign nhi kr skte const newNum=myNums.foreach ye glt hai islye humlog aise krte hai;
//console.log(newNums)//something more about filter;
const books=[
    {title:'Book one',genre:'fiction',publish:1981},
    {title:'Book two',genre:'non-fiction',publish:1982},
    {title:'Book three',genre:'history',publish:2001},
    {title:'Book four',genre:'science',publish:2002},
    {title:'Book five',genre:'history',publish:2003}
]

let userBooks=books.filter((bk)=> bk.genre==='history')
//humlog chahte toh curly bracket use krskte the but uske liye retur use krna prta
// curly bracket use nhi krna to single line me aise likhenge;

//console.log(userBooks)//fiter lgaye hai;//is trh aage jaake ecommer website me filter lgayenge;
userBooks=books.filter((bk)=>(bk.publish>=2000))//overwrite kiye hai agr over write nhi krna to dusra variable lena hoga;
//console.log(userBooks)// overwrite tbhi krenge jb variable let me likha ho;

//***********8map using; */
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
//const newNumbers=myNumbers.map((num)=>num+10)//ye bhi call back lega;
//console.log(newNumbers)

// chainng;
// do tin method ko ek saath lgane ko chaining khte hai jaise ,map ke andr map,map ke andr filter etc--
const newNumns=myNumbers
              .map((num)=>num*10)
              .map((num)=>num+1)
              .filter((num)=>/*ishme condition likhte filter me*/ num>=40)
//console.log(newNumns)


// accumulator;
 const numbers=[1,2,3]
 const myTotal=numbers.reduce(function(acc,curvalue){
    return acc+curvalue
 },0//current value like sum=0;
)
 console.log(myTotal)//ishko visualise kro sum of array in c++ here sum=0;
 //sum=sum+curvalue and sum==accumulator

 // now implement using arrow function;
 const mySum=numbers.reduce((acc,curvalue)=>acc+curvalue,0)
 console.log(mySum)
 