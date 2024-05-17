// for loop;
for(let index=0;index<8;index++){
    const ele=index
    if(ele===5){
        //console.log("5 is best number")
    }
    //console.log(ele)
}
//nested loop;
for(let i=0;i<5;i++){
    //console.log(`outer loop value ${i}`)
    for(let j=0;j<5;j++){
        //console.log(`inner loop value ${j}`)
    }
}

let myArr=["flash","batma","superman"]
for(let index=0;index<myArr.length;index++){
    const element=myArr[index];
    //console.log(element)
}

// keywords;
// break and continue;
for(let index=0;index<=20;index++){
    if(index===5){
        //console.log(`happy number found ${index}`)
        break;
    }
    //console.log(index)
}
for(let index=0;index<=20;index++){
    if(index===5){
        //console.log(`happy number found ${index}`)
        continue;
    }
    //console.log(index)
}

// WHILE LOOP and do while loop;
// while(/*condition*/true){

// }
let index=0
while(index<=10){
    //console.log(index)
    index=index+2//updation
}
let myArr2=[1,2,3,4]
let index2=0;
while(index2<myArr2.length){
    //console.log(myArr2[index2])
    index2++;
}

let score=1;//agr score=11 to bhi ek baar loop chlega ye special case hai do while loop ka
do{
    //console.log(score)
    score++;
} while(score<=10)

//   loops which is specialized for arrray//*********** */

// for in , for each , for off loop;

// FOR-OF;
// ek common scenario hai ki humlog array me object rkhenge[{},{},{}] aur humlog ko hr object se kuch vallue nikalna hai uske liye humlog (for-of)loop ka use krenge;

const arr=[1,2,3,4,5]//generaaly array of object pr lgta hai but jruri nhi ki sirf usi pe lge
for(const num of arr){
    //console.log(num)
}

// maps;
const map=new Map()
map.set('IN',"india")
map.set('Fr',"france")
//now applying for off loop in this;
for(const [key,value] of map){
   // console.log(key,value)
}

// const myObject={
//     'game1':'NFS',
//     'game2':'spiderman'
// }
// for(const[key,value] of myObject){
//     console.log(key,value)
// } ishme error aajayega to humlog istrh for off loop nhi lga skte object me ;
// map jaisa object me nhi lga skte hai;

const myObject={
    js:'javasript',
    cpp:'c++',
    rb:'ruby',
}
// for object iteration we use for in loop;
for(const key in myObject){
    // console.log(key)//ise bs key aayega,agr key aagya to key value aise nikalenge
    // console.log(myObject[key])
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}

// kya humlog for in loop array me lga skte hai??
const program=[1,2,3,56,85]
for(const key in program){
    //console.log(program[key])
    //console.log(key)//index ayega
}
// ***map me humlog ishko for in loop ko use nhi kr skte hai

//for eachh looop;
const coding=["js","cpp","rb","python"]
// coding.forEach( function (item){
//     //call back function me humlog name nhi likhte function ka
//     console.log(item)
// })
//arrow function se krte hai yaad rkhna humlog for each loop me call back function use kr rhe hai toh name nhi likhenge function ka
coding.forEach((item)=>{
    //console.log(item)
})
function printing(item){
    //console.log(item)
}
//coding.forEach(/*function ka refrence denge nah ki execute krenge**/ printing)

coding.forEach((item,index,arr)=>{
    //console.log(item,index,arr)
})

const mycoding=[{langName:"javascript",
    langFileName:"js"
},{langName:"java",
langFileName:"java"
},{langName:"c++",
langFileName:"cpp"
}]
mycoding.forEach((item)=>{
    console.log(item.langName)

})
